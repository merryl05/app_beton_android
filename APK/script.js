// Sélection des éléments DOM
const form = document.getElementById('calculatorForm');
const volumeInput = document.getElementById('volume');
const materialSelect = document.getElementById('material');
const resultsSection = document.getElementById('results');
const resultContent = document.getElementById('resultContent');

// Configuration pour le béton
// Dosage standard : 350 kg de ciment par m³ de béton
const CEMENT_PER_M3 = 350; // kg de ciment par m³
const CEMENT_BAG_WEIGHT = 50; // kg par sac
const SAND_PER_M3 = 400; // litres (ou kg) de sable par m³
const GRAVEL_PER_M3 = 800; // litres (ou kg) de gravier par m³

// Ratios pour les volumes (en m³)
const ratios = {
    concrete: {
        cement: CEMENT_PER_M3 / 1000,  // Converti en m³
        sand: SAND_PER_M3 / 1000,       // Converti en m³
        gravel: GRAVEL_PER_M3 / 1000    // Converti en m³
    }
};

// Facteur de perte (0% par défaut, modifiable selon les besoins)
const LOSS_FACTOR = 1.00; // 1.05 pour 5% de perte

/**
 * Calcule les quantités de matériaux nécessaires
 * @param {number} volume - Volume de béton désiré en m³
 * @param {string} material - Type de matériau (actuellement uniquement 'concrete')
 * @returns {object|null} Objet contenant les résultats ou null si erreur
 */
function calculateMaterials(volume, material) {
    if (!volume || volume <= 0 || !material || !ratios[material]) {
        return null;
    }

    const baseVolume = volume;
    const totalWithLoss = baseVolume * LOSS_FACTOR;

    // Calcul du ciment en kg et en sacs
    const cementKg = CEMENT_PER_M3 * totalWithLoss;
    const cementBags = Math.ceil(cementKg / CEMENT_BAG_WEIGHT);

    const results = {
        cement: (ratios[material].cement * totalWithLoss).toFixed(2),
        cementKg: cementKg.toFixed(0),
        cementBags: cementBags,
        sand: (ratios[material].sand * totalWithLoss).toFixed(2),
        gravel: (ratios[material].gravel * totalWithLoss).toFixed(2),
        totalWithLoss: totalWithLoss.toFixed(2)
    };

    return results;
}

/**
 * Affiche les résultats dans l'interface
 * @param {object|null} results - Résultats du calcul
 */
function displayResults(results) {
    if (!results) {
        resultContent.innerHTML = '<p class="error-message">Erreur : Veuillez entrer un volume valide et sélectionner un matériau.</p>';
        resultsSection.style.display = 'block';
        return;
    }

    const html = `
        <div class="result-grid">
            <div class="result-item">
                <span class="result-label">Volume total :</span>
                <span class="result-value">${results.totalWithLoss} m³</span>
            </div>
            <div class="result-item">
                <span class="result-label">Ciment :</span>
                <span>
                    <span class="result-value">${results.cementBags} sacs</span>
                    <span class="result-secondary">(${results.cementKg} kg / ${results.cement} m³)</span>
                </span>
            </div>
            <div class="result-item">
                <span class="result-label">Sable :</span>
                <span class="result-value">${results.sand} m³</span>
            </div>
            <div class="result-item">
                <span class="result-label">Gravier :</span>
                <span class="result-value">${results.gravel} m³</span>
            </div>
        </div>
    `;

    resultContent.innerHTML = html;
    resultsSection.style.display = 'block';

    // Scroll vers les résultats pour une meilleure UX
    resultsSection.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

/**
 * Gestionnaire d'événement pour la soumission du formulaire
 */
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Empêche le rechargement de la page

    const volume = parseFloat(volumeInput.value);
    const material = materialSelect.value;

    const results = calculateMaterials(volume, material);
    displayResults(results);
});

/**
 * Validation personnalisée pour le champ volume
 */
volumeInput.addEventListener('invalid', function() {
    this.setCustomValidity('Veuillez entrer un volume positif.');
});

volumeInput.addEventListener('input', function() {
    this.setCustomValidity('');
});
