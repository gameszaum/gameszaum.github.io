const formItems = document.querySelectorAll(
  'form input:not([type="text"]),form textarea',
);

formIcons = document.querySelectorAll('form .icon');

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

formItems.forEach((item, itemIndex) => {
  item.onclick = e => {
    e.preventDefault();

    formIcons.forEach((icon, iconIndex) => {
      const iconDisplay = icon.style.display;

      if (itemIndex === iconIndex) {
        icon.style.display = 'none';
      } else {
        icon.style.display = iconDisplay;
      }
    });
  };
});
