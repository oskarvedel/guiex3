<template>
    <div class="CreateNewManager">
        <form @submit.prevent ="AddExpenses">
            <md-card class="md-layout-item">
                <md-card-header>
                    <div class="md-title">Add Expenses</div>
                </md-card-header>
                <md-content>
                    <md-field>
                        <label>Date</label>
                        <md-datepicker v-model="date" />
                    </md-field>
            
                    <md-field>
                        <label>Job Date</label>
                        <md-datepicker v-model="JobId" />
                    </md-field>

                    <md-field>
                        <label>Text</label>
                        <md-input v-model="Text" />
                    </md-field>

                    <md-field>
                        <label>Amount</label>
                        <md-input v-model="Amount" />
                    </md-field>

                </md-content>
                <md-card-actions>
                    <md-button type="submit" class="md-raised">Add Expense</md-button>
                </md-card-actions>

            </md-card>
        </form>
    </div>
</template>

<script>

    export default {
        name: 'AddExpenses',
        data: () => ({
            ModelId:'',
            JobId:'',
            date:'',
            Text: '',
            Amount: ''
        }),


        methods: {
            
            AddExpenses() {
                var url = "https://localhost:44368/api/Expenses";
                var data = {
                    "modelid": parseInt(this.ModelId),
                    "jobid": parseInt(this.JobId),
                    "date": this.date,
                    "text": this.Text,
                    "amount": parseFloat(this.Amount)
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
                  .then(responseJson => {
                    var items = JSON.parse(responseJson);
                    })
                    .catch(error => this.setState({
                    isLoading: false,
                        message: 'Something bad happened ' + error
                }));

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