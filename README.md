# **Language Learning Tracker**
<div style="text-align:center;">
  <img src="/img/CR.png" alt="site">
</div>


---

The capacity to converse in multiple languages has evolved into a highly coveted skill. The process of acquiring a new language is akin to embarking on a journey, and the ability to measure and document your advancement along the way is pivotal to achieving fluency. To cater to this necessity, I've crafted the "Language Learning Tracker" – an intuitive web application that equips language enthusiasts with the means to meticulously monitor their daily study routines and gauge their proficiency levels. This endeavor was undertaken as part of a bounty project on the Stackup platform.

### Project Overview

This project is using HTML, CSS, and Javascript, here are the overview  and walkthrough of the project:

1. **Language Selection:** To begin, select your target language from the dropdown menu. We offer a wide range of options, from commonly studied languages like Spanish and French to less common ones like Vietnamese or Indonesian. If your language isn't listed, simply choose "Others."

```javascript
<div id="language-selector">
        <label for="language">Select a Language:</label>
        <select id="language">
          <option value="russian">Russian</option>
          <option value="french">French</option>
          <!-- ... other language options ... -->
          <option value="indonesia">Indonesian</option>
          <option value="others">Others</option>
        </select>
      </div>
```

2. **Daily Study Hours:** Input the amount of time you dedicate to studying your chosen language every day. This helps us keep track of your daily efforts and progress.

```javascript
<label for="study-hours">Daily Study Hours:</label>
        <input type="number" id="study-hours" />
```

3. **Proficiency Level:** Select your current proficiency level from the dropdown. Whether you're just starting ("No Proficiency") or already fluent ("Native/Bilingual Proficiency"), we cater to learners of all levels.

```javascript
<label for="proficiency">Proficiency Level:</label>
        <select id="proficiency">
          <option value="0">0. No Proficiency</option>
          <option value="1">1. Elementary Proficiency</option>
          <option value="2">2. Limited Working Proficiency</option>
          <option value="3">3. Professional Working Proficiency</option>
          <option value="4">4. Full Professional Proficiency</option>
          <option value="5">5. Native / Bilingual Proficiency</option>
        </select>
```

4. **Adding Progress:** Click the "Add Progress" button to record your study session. You can repeat this step daily to continuously update your language learning journey.

```javascript
<button id="add-progress">Add Progress</button>
```

### **Tracking Progress with Classes**

I used JavaScript classes, in the background to organize and control the data. The "Language" class serves as a representation of the languages under study, containing attributes such as "name," "studyHours," and "proficiencyLevels." When you make progress, a fresh "Language" class instance is generated based on your language choice, and your study hours and proficiency level are incorporated into the respective arrays.

```javascript
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
```

### **Utilizing Switch Statements**

In JavaScript, a switch statement is a control flow statement that allows you to evaluate an expression against multiple possible case values and execute code blocks based on the matching case. It's a more efficient way to handle multiple conditional branches when you have several possible values to compare against a single expression. 

Switch statements are employed to manage language selection. We use a switch statement to handle different language cases. If you select a language, the switch statement ensures that the data is stored in the appropriate language object, from the classes.

```javascript
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
```

### **Handling Errors with Try-Catch-Finally**

Effective error management is essential to maintain a smooth user experience. In our application, we have integrated try-catch statements to adeptly identify and address errors. If you happen to input incorrect study hours or proficiency levels, our try-catch block will intercept these issues and present a user-friendly alert message. This guarantees prompt feedback and the opportunity to rectify any errors.

```javascript
try {
    // ...
} catch (error) {
    alert("Error: " + error.message);
} finally {
    // ...
}
```

### **Visualizing Progress**

Once you've input your progress, the Language Learning Tracker generates a visual representation of your learning journey. It neatly presents your average study hours and proficiency levels for each chosen language, ensuring clarity and organization.

```javascript
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
```

> The Language Learning Tracker goes beyond being a mere tool; it becomes your companion in your language learning journey. Featuring a user-friendly interface and employing robust programming principles such as classes, switch statements, and try-catch-finally, it streamlines progress tracking and motivates you to maintain your commitment to language learning objectives.
---

## Link to the website:

-  [Language Learning Tracker App](https://riopt-js-intermediate-bounty.web.app/)

