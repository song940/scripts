// https://developer.mozilla.org/en-US/docs/Web/API/notification

class AccessDeniedError extends Error {
  constructor() {
    super(`Notification Access Denied`);
  }
}

export const request = async () => {
  const { permission, requestPermission } = Notification;
  switch (permission) {
    case 'default':
      return requestPermission();
    case 'granted':
      return permission;
    case 'denied':
      throw new AccessDeniedError();
  }
};

export const notify = async (title, options) => {
  const permission = await request();
  console.debug(permission);
  const notification = new Notification(title, options);
  return notification;
};
