const key = prompt('введите цвет')
switch (key) {
    case 'red':
        alert('stop')
        break;
    case 'yellow':
        alert('ready')
        break;
    case 'green':
        alert('go')
        break;
    default:
        alert('неизвестный цвет')
        break;
}