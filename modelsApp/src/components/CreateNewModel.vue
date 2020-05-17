<template>
    <div class="md-layout-item">
        <form
              @submit.prevent="createnewmodel">
        
                <div class="md-title">Create New Model</div>
            <md-content>
            <md-field>
                    <label>First Name</label>
                    <md-input v-model="Firstname"/>
            </md-field>

            <md-field>
                    <label>Last Name</label>
                    <md-input v-model="Lastname"/>
            </md-field>

            <md-field>
                    <label>Email</label>
                    <md-input v-model="Email"/>
            </md-field>

            <md-field>
                    <label>Phone Number</label>
                    <md-input v-model="PhoneNo"/>
            </md-field>

            <md-field>
                    <label>Addres Line 1</label>
                    <md-input v-model="AddresLine1"/>
            </md-field>

            <md-field>
                    <label>Addres Line 2</label>
                    <md-input v-model="AddresLine2"/>
            </md-field>

            <md-field>
                    <label>Zip</label>
                    <md-input v-model="Zip"/>
            </md-field>

            <md-field>
                    <label>City</label>
                    <md-input v-model="City"/>
            </md-field>

            <md-field>
                    <label>Country</label>
                    <md-input v-model="Country"/>
            </md-field>

            <md-field>
                    <label>Birthdate</label>
                    <md-input v-model="BirthDate"/>
            </md-field>

            <md-field>
                    <label>Nationality</label>
                    <md-input v-model="Nationality"/>
            </md-field>

            <md-field>
                    <label>Height</label>
                    <md-input v-model="Height"/>
            </md-field>

            <md-field>
                    <label>Shoesize</label>
                    <md-input v-model="ShoeSize"/>
            </md-field>

            <md-field>
                    <label>Haircolor</label>
                    <md-input v-model="HairColor"/>
            </md-field>

            <md-field>
                    <label>Eyecolor</label>
                    <md-input v-model="EyeColor"/>
            </md-field>

            <md-field>
                    <label>Comment</label>
                    <md-textarea v-model="Comments"/>
            </md-field>

            <md-field>
                    <label>Password</label>
                    <md-input type="password" v-model="Password"/>
            </md-field>
            </md-content>
           
                <md-button type="submit">Add New Model</md-button>

        </form>    
    </div>
</template>

<script>

    export default {
        name: 'CreateNewModel',
        data: () => ({
                    Firstname: "",
                    Lastname: "",
                    Email: "",
                    PhoneNo: "",
                    AddresLine1: "",
                    AddresLine2: "",
                    Zip: "",
                    City: "",
                    Country: "",
                    BirthDate: "",
                    Nationality: "",
                    Height: '',
                    ShoeSize: '',
                    HairColor: "",
                    EyeColor: "",
                    Comments: "",
                    Password:""
        }),
        methods: {
                createnewmodel(){
                var url = "https://localhost:44368/api/Models";
                var data = {
                       /* "model" :this.model*/
                    "firstName": this.Firstname,
                    "lastName": this.Lastname,
                    "email": this.Email,
                    "phoneNo": this.PhoneNo,
                    "addresLine1": this.AddresLine1,
                    "addresLine2": this.AddresLine2,
                    "zip": this.Zip,
                    "city": this.City,
                    "country": this.Country,
                    "birthDate": this.BirthDate,
                    "nationality": this.Nationality,
                    "height": parseInt(this.Height),
                    "shoeSize": parseInt(this.ShoeSize),
                    "hairColor": this.HairColor,
                    "eyeColor": this.EyeColor,
                    "comments": this.Comments,
                    "password":this.Password
                };
                fetch(url, {
                    method: 'POST',
                    body: JSON.stringify(data),
                    credentials: 'include',
                    headers: {
                        'Authorization': 'Bearer ' + localStorage.getItem("token"),
                        'Content-Type': 'application/json'
                    }
                })
                .then(res => {
                if(res.status !== 201)
                {
                    this.statusMsg = 'Unsuccesful';
                }
                else{
                    this.statusMsg = 'Succesfully created model';
                }
            })
            .catch(error => {
                console.error(error);
            });
                }
        
        }
    }

    

</script>

<style scoped>

</style>