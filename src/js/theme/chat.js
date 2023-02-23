/*-----------------------------------------------
|   Chat
-----------------------------------------------*/
const chatInit = () => {
  const { getData } = window.phoenix.utils;

  const Selector = {
    CHAT_SIDEBAR: '.chat-sidebar',
    CHAT_TEXT_AREA: '.chat-textarea',
    CHAT_THREADS: '[data-chat-thread]',
    CHAT_THREAD_TAB: '[data-chat-thread-tab]',
    CHAT_THREAD_TAB_CONTENT: '[data-chat-thread-tab-content]'
  };

  const $chatSidebar = document.querySelector(Selector.CHAT_SIDEBAR);
  const $chatTextArea = document.querySelector(Selector.CHAT_TEXT_AREA);
  const $chatThreads = document.querySelectorAll(Selector.CHAT_THREADS);
  const threadTab = document.querySelector(Selector.CHAT_THREAD_TAB);
  const threadTabContent = document.querySelector(
    Selector.CHAT_THREAD_TAB_CONTENT
  );

  if (threadTab) {
    const threadTabItems = threadTab.querySelectorAll("[data-bs-toggle='tab']");

    const list = new window.List(threadTabContent, {
      valueNames: ['read', 'unreadItem']
    });

    threadTabItems.forEach(tabEl =>
      tabEl.addEventListener('shown.bs.tab', () => {
        const value = getData(tabEl, 'chat-thread-list');
        list.filter(item => {
          if (value === 'all') {
            return true;
          }
          return item.elm.classList.contains(value);
        });
      })
    );
  }

  $chatThreads.forEach(thread => {
    thread.addEventListener('click', () => {
      $chatSidebar.classList.remove('show');
      if (thread.classList.contains('unread')) {
        thread.classList.remove('unread');
        const unreadBadge = thread.querySelector('.unread-badge');
        if (unreadBadge) {
          unreadBadge.remove();
        }
      }
    });
  });

  if ($chatTextArea) {
    $chatTextArea.setAttribute('placeholder', 'Type your message...');
  }
};

export default chatInit;
