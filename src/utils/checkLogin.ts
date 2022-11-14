export function checkLogin() {
    if (localStorage.getItem('logged')) {
        return 'logged'
    } else {
        return null
    }
}