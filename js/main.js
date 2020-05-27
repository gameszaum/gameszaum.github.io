const progressBars = document.querySelectorAll('.skill-item .progress-marker');
const nameItems = document.querySelectorAll('.skill-item .skill_name');
const SKILL_LIST = [
  {
    name: 'Java',
    percentage: '75%',
  },
  {
    name: 'CSS',
    percentage: '52%',
  },
  {
    name: 'NodeJS',
    percentage: '35%',
  },
  {
    name: 'SQL',
    percentage: '75%',
  },
  {
    name: 'Javascript',
    percentage: '50%',
  },
  {
    name: 'HTML',
    percentage: '68%',
  },
];

progressBars.forEach((bar, barIndex) => {
  SKILL_LIST.forEach((skill, skillIndex) => {
    if (barIndex === skillIndex) {
      bar.style.width = skill.percentage;
    }
  });
});

nameItems.forEach((name, nameIndex) => {
  SKILL_LIST.forEach((skill, skillIndex) => {
    if (nameIndex === skillIndex) {
      name.innerHTML += skill.name;
    }
  });
});
