/* -------------------------------------------------------------------------- */
/*                                   choices                                   */
/* -------------------------------------------------------------------------- */
const choicesInit = () => {
  const { getData } = window.phoenix.utils;

  const elements = document.querySelectorAll('[data-choices]');
  if (elements.length) {
    elements.forEach(item => {
      const userOptions = getData(item, 'options');
      const choices = new window.Choices(item, {
        itemSelectText: '',
        addItems: true,
        ...userOptions
      });
      return choices;
    });
  }
};

export default choicesInit;
