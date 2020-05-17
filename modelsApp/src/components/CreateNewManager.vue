<template>
    <div class="CreateNewManager">
        <form @submit.prevent ="createNewManagerFunction">
            <md-card class="md-layout-item">
                <md-card-header>
                    <div class="md-title">Create New Manager</div>
                </md-card-header>
                <md-content>
                    <md-field>
                        <label>First Name</label>
                        <md-input v-model="managerfirstname" />
                    </md-field>

                    <md-field>
                        <label>Last Name</label>
                        <md-input v-model="managerlastname" />
                    </md-field>

                    <md-field>
                        <label>Email</label>
                        <md-input v-model="manageremail" />
                    </md-field>

                    <md-field>
                        <label>Password</label>
                        <md-input v-model="managerpassword" type="password" />
                    </md-field>
                </md-content>
                <md-card-actions>
                    <md-button type="submit" class="md-raised">Add New Manager</md-button>
                </md-card-actions>

            </md-card>
        </form> 
    </div>
</template>

<script>
    export default {
        name: 'CreateNewManager',
        data: () => ({
            managerlastname: '',
            managerfirstname: '',
            manageremail: '',
            managerpassword: ''
        }),

        methods: {
            createNewManagerFunction() {
                var url = "https://localhost:44368/api/Managers";
                var data = {
                    "firstname": this.managerfirstname,
                    "lastname": this.managerlastname,
                    "email": this.manageremail,
                    "password": this.managerpassword
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

                .then(responseJson =>{
                    var items = JSON.parse(responseJson);

                })
                .catch(error => this.setState({
                    isLoading: false,
                    message: 'Something bad happened' + error}))
                
            }
        }
    }
</script>

<style scoped>
    .md-layout-item {
        position: relative;
        height: 450px;
        width: 400px;
    }
</style>