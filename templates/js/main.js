
console.log('\
  「 ✦ your active engagement is powered by ✦ 」\
  _____  ___     __  _     _____ ____  ______    ___ \
 / ___/ /   \   /  ]| |   / ___/|    ||      |  /  _]\
(   \_ |     | /  / | |  (   \_  |  | |      | /  [_ \
 \__  ||  O  |/  /  | |___\__  | |  | |_|  |_||    _]\
 /  \ ||     /   \_ |     /  \ | |  |   |  |  |   [_ \
 \    ||     \     ||     \    | |  |   |  |  |     |\
  \___| \___/ \____||_____|\___||____|  |__|  |_____|\
                           v25.3.27\
                          socl.site\
\n')

console.log('\n  Loading Soclsite engine...\n')

const action1 = () => {
    alert('Action #1')
}

const action2 = () => {
    alert('Action #2')
}

globalThis.Soclsite = {
    action1,
    action2,
}
