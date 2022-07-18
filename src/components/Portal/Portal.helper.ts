export const createWrapperId = (wrapperId: string) => {
  const wrapperElement = document.createElement('aside');
  wrapperElement.setAttribute('id', wrapperId);
  document.body.appendChild(wrapperElement);
  return wrapperElement;
};
