const socket = io();

const timeline = document.getElementById('timeline')


function getIcon(name, data) {

    const skill = data.find(item => item.name === name);
    
    return skill.skillicon_name
}

socket.on("message", (msg) => {
    if (msg == null) return

    fetch('class/class.json')
        .then(response => response.json())
        .then(json_data => {
            const spell_img = document.createElement("img");
            
            if(getIcon(`${msg}`,json_data) == null ) return

            spell_img.className = 'spell';
            spell_img.src = `icon/${getIcon(`${msg}`,json_data)}.png`
            timeline.appendChild(spell_img)

            setTimeout(() => {
                spell_img.classList.add('remove')
                setTimeout(()=>{
                    spell_img.remove(); 
                },500)
            }, 3000);
        })
        .catch(error => console.error("Erreur de chargement du JSON:", error));
});


