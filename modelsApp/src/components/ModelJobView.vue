<template>
    <div class="md-layout">
        <md-card>
            <md-card-header>
                <div class="md-title">Job liste</div>
            </md-card-header>

            <md-card-content>
                <md-table>
                    <md-table-row>
                        <md-table-head>Customer</md-table-head>
                        <md-table-head>Start date</md-table-head>
                        <md-table-head>Days</md-table-head>
                        <md-table-head>location</md-table-head>
                        <md-table-head>Comments</md-table-head>
                    </md-table-row>


                    <md-table-row>
                        <md-table-cell>Customrer</md-table-cell>
                        <md-table-cell>en eller anden dag</md-table-cell>
                        <md-table-cell>en milliard dafge</md-table-cell>
                        <md-table-cell>et sted</md-table-cell>
                        <md-table-cell>En dum kommentar</md-table-cell>
                    </md-table-row>
                </md-table>
            </md-card-content>

        </md-card>
    </div>
</template>

<script>
    export default {
        name: 'ModelJobView'

    };
</script>

<style scoped>
    .md-layout {
        position: relative;
        height: 400px;
        width: 8000px;
    }
</style>