
console.log(`
  「 ✦ your active engagement is powered by ✦ 」
            ╔═╗╦═╗╔═╗╔╦╗╔═╗╦╔═╗╦ ╦
            ╠╣ ╠╦╝╠═╣║║║║╣ ║╠╣ ╚╦╝
            ╚  ╩╚═╩ ╩╩ ╩╚═╝╩╚   ╩
                      frameify.xyz
\n`)

console.log('\n  Loading Frameify engine...\n')

const action1 = () => {
    alert('Action #1')
}

const action2 = () => {
    alert('Action #2')
}

globalThis.Frameify = {
    action1,
    action2,
}
