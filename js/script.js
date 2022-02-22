window.addEventListener('DOMContentLoaded', () => {
  const tabs = document.querySelectorAll('.tabheader__item');
  const tabsContent = document.querySelectorAll('.tabcontent');
  const tabsParent = document.querySelector('.tabheader__item');

  const hideTabContent = () => {
    tabsContent.forEach((item) => {
      item.style.display = 'none';
    });

    tabs.forEach((item) => {
      item.classList.remove('.tabheader__item_active');
    });
  };

  const showTabContent = (i = 0) => {
    tabsContent[i].style.display = 'block';
    item.classList.add('.tabheader__item_active');
  };

  hideTabContent();
  showTabContent();
});
