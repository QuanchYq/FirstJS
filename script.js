const personalPlanPeter = {
    name: 'Aikyn',
    age: '18',
    skills: {
        languages: ['ru','eng'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '1 month'
    },
    showAgeAndLangs: function (plan) {
        const {age} = plan;
        const {languages} = plan.skills
        let str =  `I am ${age} and i use languages`;
        languages.forEach(function(lang) {
            str += `${lang.toUpperCase()}`;
        });
        return str;
    }
}
personalPlanPeter.showAgeAndLangs(personalPlanPeter);

function showExperience(plan) {
    const {exp} = plan.skills;
    return exp;
}

showExperience(personalPlanPeter)
