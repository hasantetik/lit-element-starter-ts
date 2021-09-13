import { LitElement, html } from 'lit-element';



class FetchOgretmen extends LitElement{
   
    static get properties(){
        return {data: Object};
    }

    connectedCallback(){
        super.connectedCallback();
        this.fetchDataFromUrl();
    }

    fetchDataFromUrl(){
        fetch('http://localhost:1453/ogretmen/getAll')
        .then(response => response.json())
        .then(x => { this.data = x})
        .catch(err => console.log(err));
    }
    render(){
      
      return this.data ?   
      html`
             <link rel="stylesheet" href="../node_modules/bootstrap/dist/css/bootstrap.min.css">
            
            <div>
              <h2>Öğretmenler</h2>
              <ul class="list-group">
                   ${this.data.map(u => html `
                    
                    
                    
                   <ol class="list-group ">
                   <li class="list-group-item d-flex justify-content-between align-items-start">
                     <div class="ms-2 me-auto">
                       <div class="fw-bold">${u.ogr_name}</div>
                      <br>
                     </div>
                     <span class="badge bg-primary rounded-pill">id : ${u.ogr_id}</span>
                   </li>
                 </ol>


                 
                `)} 
              </ul> 
          </div>` 
      
      
      : html `<span>Gelmedi</span>`
       
    }
}

customElements.define('fetch-ogretmen',FetchOgretmen);
