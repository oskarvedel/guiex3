<template>
    <div class="md-layout-item">
        <form @submit ="createjob">
            <md-card class="md-layout-item">
                <md-card-header>
                    <div class="md-title">Create New Job</div>
                </md-card-header>
                <md-content>
                    <md-field>
                        <label>Customer</label>
                        <md-input v-model="customer" />
                    </md-field>

                    <md-field>
                        <label>Start Date</label>
                        <md-input v-model="startdate" />
                    </md-field>

                    <md-field>
                        <label>Days</label>
                        <md-input v-model="days" />
                    </md-field>

                    <md-field>
                        <label>Location</label>
                        <md-input v-model="location"/>
                    </md-field>
                     <md-field>
                        <label>Comment</label>
                        <md-textarea v-model="comment"/>
                    </md-field>
                     
                </md-content>
                <md-card-actions>
                    <md-button type="submit" class="md-raised">Add New Job</md-button>
                </md-card-actions>

            </md-card>
        </form> 
    </div>
</template>

<script>
    export default {
        name: 'CreateNewJob',
        data: () => ({
            customer:"",
            startdate:"",
            days: 0,
            location:"",
            comment:""
        }),
    }
</script>

<style scoped>
</style>