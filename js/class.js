// Clase creada con el fin de que el usuario nos haga un feedback de la Experiencia
// Faltaria mejorarlo un poco mas pero cumple un poco lo esperado
// Solamente actua en desktop
// En mobile esta Display None

class Commit{
    constructor(name,message,year){
        this.name = name
        this.message = message
        this.year = year
    }
}

class UI{
    addCommit(text){
       const commitList = document.getElementById('product-list')
       const elment = document.createElement('div')
       elment.innerHTML = `
            <div class="card text-center mb-4">
                    <div class="card-body">
                    <strong>Nombre</strong>:${text.name}
                    <strong>Mensaje</strong>:${text.message}
                    <strong>Años</strong>:${text.year}
                    </div>
            </div>
       `;
       commitList.appendChild(elment)
    }
    resetForm(){
        document.getElementById('product-form').reset()
    }
   
}

document.getElementById('product-form')
.addEventListener('submit', function(e){
    const name = document.getElementById('name').value
    const message = document.getElementById('message').value
    const year = document.getElementById('year').value

    const text = new Commit(name,message,year)
    
    
    const ui = new UI()
    ui.addCommit(text)
    ui.resetForm()

    e.preventDefault()
}) 