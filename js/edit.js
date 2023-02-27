new Vue({
    el: '#app',
    data: {
      jsonString: null,
      json: null,
      jsonLoaded: false,
      items: [],
      newItem: {text: '', value1: '', value2: '', value3: ''},
      jsonData: null,
    },
    methods: {
      onFileChange(event) {
        let reader = new FileReader();
        reader.onload = () => {
          this.jsonString = reader.result;
          this.parseJSON();
        };
        reader.readAsText(event.target.files[0]);
      },
      parseJSON() {
        this.json = JSON.parse(this.jsonString);
        this.items = this.json.arrayObject;
        this.jsonLoaded = true;
      },
      addItem() {
        this.items.push(this.newItem);
        this.newItem = {text: '', value1: '', value2: '', value3: ''};
      },
      removeItem(index) {
        this.items.splice(index, 1);
      },
      editItem(index) {
      this.editIndex = index;
      this.newItem = Object.assign({}, this.items[index]);
      },
      save() {
        // create blob object with json content
        const blob = new Blob([JSON.stringify({arrayObject: this.items})], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        
        // create download link and click it to start download
        const link = document.createElement('a');
        link.href = url;
        link.download = 'result.json';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
      },
      saveEdit() {
      this.items.splice(this.editIndex, 1, this.newItem);
      this.editIndex = null;
      this.newItem = { text: "", value1: "", value2: "", value3: "" };
      },
      getJsonData() {
        fetch('../data/data.json')
          .then(response => response.json())
          .then(data => {
            this.jsonData = data;
          });
      },
    },
    mounted() {
      this.getJsonData();
    },
  });