// https://developer.mozilla.org/en-US/docs/Web/API/notification

class AccessDeniedError extends Error {
  constructor() {
    super(`Notification Access Denied`);
  }
}

export let { permission, requestPermission } = Notification;
export const getPermission = () => permission = Notification.permission;

export const request = async () => {
  switch (permission) {
    case 'default':
      return requestPermission();
    case 'granted':
      return permission;
    case 'denied':
      throw new AccessDeniedError();
  }
};

export const showNotification = async (title, options) => {
  return new Notification(title, options);
};

export const notify = async (title, options) => {
  await request();
  return showNotification(title, options);
};
