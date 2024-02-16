export function greetings() {
  let hour = new Date().getHours();
  if (hour >=  0 && hour <  12) {
    return 'um bom dia';
  } else if (hour >=  12 && hour <  18) {
    return 'uma boa tarde';
  } else {
    return 'uma boa noite';
  }
}