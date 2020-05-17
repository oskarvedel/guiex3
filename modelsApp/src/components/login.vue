<template>
    <div class="md-layout-item">
        <form @submit.prevent="loginfunction">
            <md-card>
                <md-ripple>
                    <md-card-header>
                        <div class="md-title">Login</div>
                    </md-card-header>

                    <md-card-content>
                       
                        <md-field md-clearable class="userNameField">
                            <label>UserName</label>
                            <md-input v-model="UserName"></md-input>
                            <md-option value="center">Center</md-option>
                        </md-field>

                        <md-field class="passwordField">
                            <label>Password</label>
                            <md-input v-model="Password" type="password"></md-input>
                            <md-option value="center">Center</md-option>
                        </md-field>
                        
                    </md-card-content>

                    <md-card-actions>
                        <md-button type="submit">Login</md-button>
                    </md-card-actions>


                </md-ripple>
            </md-card>
        </form>
    </div>
</template>

<script>
    import router from "../Router";

    export default {
        name: 'login',
        data: () => ({
            UserName: 'UserName',
            PassWord: 'Password'
        }),

        methods:
                {
                    loginfunction() {
                        
                        var url = 'https://localhost:44368/api/Account/login';
                        var data = {
                            email: this.UserName,
                            Password: this.PassWord,
                            OldPassword: this.PassWord
                        };

                        fetch(url, {
                            method: 'POST',
                            body: JSON.stringify(data),
                            headers: new Headers({ 'Content-Type': 'application/json' })
                        }).then(res => res.json()).then((token) => {
                            localStorage.setItem("token", token.jwt);
                            router.push("/")
                        }).catch(error => alert("Error!!! " + error))
                    }
                }
    };
</script>

<style scoped>
    
    .passwordField
    {
        position: relative;
    }

    .userNameField
    {
        position: relative;
    }

    .md-layout-item 
    {
        position: relative;
        height: 400px;
        width: 400px;
          
    }
</style>

