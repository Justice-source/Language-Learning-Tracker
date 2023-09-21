// Language class to represent languages being learned
class Language {
    constructor(name) {
        this.name = name;
        this.studyHours = [];
        this.proficiencyLevels = [];
    }

    addProgress(hours, proficiency) {
        this.studyHours.push(hours);
        this.proficiencyLevels.push(proficiency);
    }
}

const languages = {};

document.getElementById("add-progress").addEventListener("click", function () {
    const selectedLanguage = document.getElementById("language").value;
    const studyHours = parseFloat(document.getElementById("study-hours").value);
    const proficiency = parseFloat(document.getElementById("proficiency").value);

    try {
        switch (selectedLanguage) {
            case "russian":
            case "french":
            case "japanese":
            case "korean":
            case "chinese":
            case "german":
            case "italian":
            case "portuguese":
            case "spanish":
            case "turkish":
            case "vietnamese":
            case "indonesia":
            case "others":
                if (isNaN(studyHours) || isNaN(proficiency)) {
                    throw new Error("Please enter valid study hours and proficiency level.");
                }

                if (!languages[selectedLanguage]) {
                    languages[selectedLanguage] = new Language(selectedLanguage);
                }

                languages[selectedLanguage].addProgress(studyHours, proficiency);
                updateLanguageProgress();
                break;

            default:
                throw new Error("Invalid language selection.");
        }
    } catch (error) {
        alert("Error: " + error.message);
    } finally {
        document.getElementById("study-hours").value = "";
        document.getElementById("proficiency").value = "0"; // Set proficiency to default "No Proficiency"
    }
});

function updateLanguageProgress() {
    const languageProgressDiv = document.getElementById("language-progress");
    languageProgressDiv.innerHTML = "";

    for (const lang in languages) {
        const language = languages[lang];
        const avgHours = language.studyHours.reduce((acc, val) => acc + val, 0) / language.studyHours.length;
        const avgProficiency = language.proficiencyLevels.reduce((acc, val) => acc + val, 0) / language.proficiencyLevels.length;

        const languageDiv = document.createElement("div");
        languageDiv.classList.add("language-progress");
        languageDiv.innerHTML = `
        <h2>${language.name}</h2>
        <p>Average Study Hours: ${avgHours}</p>
        <p>Average Proficiency: ${avgProficiency}</p>
        `;

        languageProgressDiv.appendChild(languageDiv);
    }
}

// Set proficiency to default "No Proficiency" on page load
document.getElementById("proficiency").value = "0";