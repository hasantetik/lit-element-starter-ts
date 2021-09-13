import {
    LitElement,
    html
} from 'lit-element'

class FetchPost extends LitElement {

    render() {
        return html `
        <link rel="stylesheet" href="../node_modules/bootstrap/dist/css/bootstrap.min.css">



        <form id="myForm" @submit=${this.postFormData}>
       
        <h2>Öğrenci Ekle</h2>
          <div class="col">
            <input type="text" name="name" id="name" class="form-control" placeholder="name">
          </div>
          <div class="col">
          <input type="text" name="number" id="number" class="form-control" placeholder="Student number">
        </div>
    
        <button type="submit">Gönder</button>
      </form>
        


        `
    }


    postFormData(event) {
        event.preventDefault();
        console.log('form gönderildi...');
        let form = this.shadowRoot.getElementById('myForm');
        console.log(form);

        let formData = new FormData(form);   
        let bodyJSON = {
          name: formData.get("name"),
          number:  formData.get("number"),
        };
   
        fetch('http://localhost:1453/ogrenci/insert', {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json; charset=utf8',
            },
            body: JSON.stringify(bodyJSON),
          }).
        then(x=>x.json())
        .then(y=>console.log(y))
        .catch(err=>console.log(err));

     
      
          //let result = await response.json();
      
        console.log('Getting key: '+ formData.get('name') + 'aaaaa' + formData.get('number'));
        console.log(formData);

    }
}

customElements.define('fetch-post', FetchPost);