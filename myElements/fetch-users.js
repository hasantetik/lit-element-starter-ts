import { LitElement, html } from 'lit-element';



class FetchUsers extends LitElement{
   
    static get properties(){
        return {data: Object};
    }

    connectedCallback(){
        super.connectedCallback();
        this.fetchDataFromUrl();
    }

    fetchDataFromUrl(){
        fetch('http://localhost:1453/ogrenci/getAll')
        .then(response => response.json())
        .then(x => { this.data = x})
        .catch(err => console.log(err));
    }
    render(){
      
      return this.data ?   
      html`
             <link rel="stylesheet" href="../node_modules/bootstrap/dist/css/bootstrap.min.css">
            
            <div>
              <h2>Öğrenciler</h2>
              <ul class="list-group">
                   ${this.data.map(u => html `
                    
                    
                    
                   <ol class="list-group ">
                   <li class="list-group-item d-flex justify-content-between align-items-start">
                     <div class="ms-2 me-auto">
                       <div class="fw-bold">${u.name}</div>
                      Ögrenci No : ${u.number}
                     </div>
                     <span class="badge bg-primary rounded-pill">id : ${u.id}</span>
                   </li>
                 </ol>


                 
                `)} 
              </ul> 
          </div>` 
      
      
      : html `<span>Gelmedi</span>`
       
    }
}

customElements.define('fetch-users',FetchUsers);
