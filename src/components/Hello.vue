<template>
  <div class="hello">
    <el-row :gutter="5">
      <el-col :span="24">
        <div class="grid-content bg-purple">
          <table class="XXX" width=100%>
            <tr>
              <td colspan="5" rowspan="2">
                Concur Travel Expense System
              </td>
              <td rowspan="2">
                <el-button type="primary" v-on:click="readtest">Read test</el-button>
                <el-button type="primary" v-on:click="savetest">Save test</el-button>
              </td>
              <td>Report Date</td>
              <td>
                <div class="block">
                  <el-date-picker v-model="valueZ" type="date" placeholder="Pick a day">
                  </el-date-picker>
                </div>
              </td>
            </tr>
            <tr>
              <td>Project Start Date</td>
              <td>Project Go Live Date</td>
            </tr>
            <tr>
              <td width="12.5%">
                Domain
              </td>
              <td width="12.5%">
                <el-input placeholder="Please input" v-model="input"></el-input>
              </td>
              <td width="12.5%">
                Executive Sponsor
              </td>
              <td width="12.5%">
                <el-input placeholder="Please input" v-model="input"></el-input>
              </td>
              <td width="12.5%">
                Discovery Lead
              </td>
              <td width="12.5%">
                <el-input placeholder="Please input" v-model="input" size="mini"></el-input>
              </td>
              <td width="12.5%">
                <div class="block">
                  <el-date-picker v-model="valueX" type="date" size="small" placeholder="Pick a day">
                  </el-date-picker>
                </div>
              </td>
              <td width="12.5%">
                <div class="block">
                  <el-date-picker v-model="valueY" type="date" placeholder="Pick a day">
                  </el-date-picker>
                </div>
              </td>
            </tr>
          </table>
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="5">
        <el-col :span="8">
          <div class="grid-content bg-purple" align="left">
            <table width="100%" class="XXX">
              <tr>
                <td>Project Objective</td>
              </tr>
            </table>
            <quill-editor style="height: 365px; " class="editor-example" ref="myTextEditor" :content="content" @change="onEditorChange($event)"></quill-editor>
          </div>
        </el-col>
        <el-col :span="16">
          <div class="grid-content">
            <el-row :gutter="5">
              <el-col :span="17">
                <div>
                  <table width="100%" class="XXX">
                    <tr>
                      <td>Status Summary</td>
                    </tr>
                  </table>
                  <table class="XXX" width=100%>
                    <tr>
                      <td>Current
                      </td>
                      <td>
                        <el-dropdown @command="handleCommand">
                          <el-button v-bind:type="StatusButton">
                            {{test}}<i class="el-icon-caret-bottom el-icon--right"></i>
                          </el-button>
                          <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item command="GREEN">GREEN</el-dropdown-item>
                            <el-dropdown-item command="YELLOW">YELLOW</el-dropdown-item>
                            <el-dropdown-item command="RED">RED</el-dropdown-item>
                          </el-dropdown-menu>
                        </el-dropdown>
                      </td>
                      <td width=70% rowspan="3">
                        <el-input type="textarea" :rows="5" placeholder="Please input" v-model="textarea_Status">
                        </el-input>
                      </td>
                    </tr>
                    <tr>
                      <td> Prior
                      </td>
                      <td>
                        <el-dropdown @command="handleCommand">
                          <el-button v-bind:type="StatusButton">
                            {{test}}<i class="el-icon-caret-bottom el-icon--right"></i>
                          </el-button>
                          <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item command="GREEN">GREEN</el-dropdown-item>
                            <el-dropdown-item command="YELLOW">YELLOW</el-dropdown-item>
                            <el-dropdown-item command="RED">RED</el-dropdown-item>
                          </el-dropdown-menu>
                        </el-dropdown>
                      </td>
                    </tr>
                    <tr>
                      <td> Trend
                      </td>
                      <td>
                        <el-dropdown @command="handleCommand">
                          <el-button v-bind:type="StatusButton">
                            {{test}}<i class="el-icon-caret-bottom el-icon--right"></i>
                          </el-button>
                          <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item command="GREEN">GREEN</el-dropdown-item>
                            <el-dropdown-item command="YELLOW">YELLOW</el-dropdown-item>
                            <el-dropdown-item command="RED">RED</el-dropdown-item>
                          </el-dropdown-menu>
                        </el-dropdown>
                      </td>
                    </tr>
                  </table>
                  <ag-grid-vue style="width: 100%; height: 180px;" class="ag-fresh" :gridOptions="gridOptions" :columnDefs="columnDefs" :rowData="rowData" />
                </div>
              </el-col>
              <el-col :span="7">
                <div>
                  <table width="100%" class="XXX">
                    <tr>
                      <td>Project Team</td>
                    </tr>
                  </table>
                  <table width=100%>
                    <tr>
                      <td width=20%>
                        BA
                      </td>
                      <td>
                        <el-input placeholder="Please input" v-model="input_BA" size="mini"></el-input>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        SA
                      </td>
                      <td>
                        <el-input placeholder="Please input" v-model="input_SA" size="mini"></el-input>
                      </td>
                    </tr>
                    <tr>
                      <td width=20%>
                        SA
                      </td>
                      <td>
                        <el-input placeholder="Please input" v-model="input_BA" size="mini"></el-input>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        QA
                      </td>
                      <td>
                        <el-input placeholder="Please input" v-model="input_SA" size="mini"></el-input>
                      </td>
                    </tr>
                    <tr>
                      <td width=20%>
                        Network
                      </td>
                      <td>
                        <el-input placeholder="Please input" v-model="input_BA" size="mini"></el-input>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        App Support
                      </td>
                      <td>
                        <el-input placeholder="Please input" v-model="input_SA" size="mini"></el-input>
                      </td>
                    </tr>
                    <tr>
                      <td width=20%>
                        IAM
                      </td>
                      <td>
                        <el-input placeholder="Please input" v-model="input_BA" size="mini"></el-input>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        DSS
                      </td>
                      <td>
                        <el-input placeholder="Please input" v-model="input_SA" size="mini"></el-input>
                      </td>
                    </tr>
                    <tr>
                      <td width=20%>
                        Finance
                      </td>
                      <td>
                        <el-input placeholder="Please input" v-model="input_BA" size="mini"></el-input>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        Complaince
                      </td>
                      <td>
                        <el-input placeholder="Please input" v-model="input_SA" size="mini"></el-input>
                      </td>
                    </tr>
                  </table>
                </div>
              </el-col>
            </el-row>
            <el-row :gutter="5">
              <el-col :span="14">
                <div class="grid-content bg-purple">
                  <table width=100%>
                    <tr>
                      <td colspan="2">Project Justification</td>
                    </tr>
                    <tr>                      
                      <td>
                        <el-checkbox-group v-model="checklist">
                        <table width=100% align="left">
                          <tr>
                            <td align="left"><el-checkbox label="Complaince / Regulatory"></el-checkbox>
                            </td>
                            <td align="left"><el-checkbox label="Better Guest Experience"></el-checkbox>
                            </td>
                          </tr>
                          <tr>
                            <td align="left"><el-checkbox label="Process Improvement"></el-checkbox>
                            </td>
                            <td align="left"><el-checkbox label="new Business Capabilities"></el-checkbox>
                            </td>
                          </tr>
                          <tr>
                            <td align="left"><el-checkbox label="Cost Reduction"></el-checkbox>
                            </td>
                            <td align="left"><el-checkbox label="Risk Remediation"></el-checkbox>
                            </td>
                          </tr>
                          <tr>
                            <td align="left"><el-checkbox label="Revenue Generation"></el-checkbox>
                            </td>
                            <td align="left"><el-checkbox label="Alignment to IT standards"></el-checkbox>
                            </td>
                          </tr>
                          <tr>
                            <td align="left"><el-checkbox label="Functional Enhancement"></el-checkbox>
                            </td>
                            <td align="left"><el-checkbox label="System Consolidation"></el-checkbox>
                            </td>
                          </tr>
                        </table></el-checkbox-group>
                      </td>
                     
                    </tr>
                  </table>
                </div>
              </el-col>              
              <el-col :span="10">
                <div class="grid-content bg-purple">
                  <table>
                    <tr>
                      <td>
                        Overall Dependencies
                      </td>
                    </tr>
                  </table>
                  <el-input type="textarea" :rows="5" placeholder="Please input" v-model="textarea_Status">
                        </el-input>
                </div>
              </el-col>
            </el-row>
          </div>
        </el-col> 
    </el-row>
    <el-row :gutter="5">
      <el-col :span="8">
        <div class="grid-content bg-purple">
          <table width=100%>
            <tr>
              <td>
                Accomplishments for this Period
              </td>
            </tr>
          </table>
          <table width=100%>
            <tr>
              <td>
                <el-input type="textarea" :rows="5" placeholder="Please input" v-model="textarea_Status">
                        </el-input>
              </td>
            </tr>
          </table>
          <table width=100%>
            <tr>
              <td>
                Activities for Next Period
              </td>
            </tr>
          </table>
          <table width=100%>
             <tr>
              <td>
                <el-input type="textarea" :rows="5" placeholder="Please input" v-model="textarea_Status">
                        </el-input>
              </td>
            </tr>
          </table>
        </div>
      </el-col>
      <el-col :span="16">
        <div class="grid-content bg-purple">
          <table width=100%>
            <tr>
              <td>
                Schedule
              </td>
            </tr>
          </table>
          <table width=100%>
            <tr>
              <td>
                <vue-chart
                    chart-type="Timeline"
                    :columns="columns"
                    :rows="rows"
                    :options="options"
                ></vue-chart>
              </td>
            </tr>
          </table>
        </div>
      </el-col>
    </el-row>
</div>
</template>

<script>
  import Vuetable from 'vuetable-2/src/components/Vuetable';
  import { AgGridVue } from "ag-grid-vue";
  import HeaderGroupComponent from './HeaderGroupComponent.vue';
  
  export default {
    name: 'hello',
    data() {
      return {
        msg: 'Welcome William Budget system',
        test: 'asd',
        StatusButton: 'primary',
        valueX: '',
        valueY: '',
        valueZ: '',
        input_BA: '',
        input_SA: '',
        input: '',
        content: '',
        editorOption: '',
        textarea_Status: '',
        rowData: [],
        columnDefs: null,
        gridOptions: null,
        checklist:[],
        columns: [{
              'type': 'string',
              'label': 'President'
          }, {
              'type': 'date',
              'label': 'Sales'
          }, {
              'type': 'date',
              'label': 'Expenses'
          }],
        rows: [
           [ 'Washington', new Date(1789, 3, 30), new Date(1797, 2, 4) ],
          [ 'Adams',      new Date(1797, 2, 4),  new Date(1801, 2, 4) ],
          [ 'Jefferson',  new Date(1801, 2, 4),  new Date(1809, 2, 4) ],
          [ 'Adams1',      new Date(1797, 2, 4),  new Date(1801, 2, 4) ],
          [ 'Jefferson1',  new Date(1801, 2, 4),  new Date(1809, 2, 4) ],
        ],
        options: {
          
            
            
            height: 260,
        },

      }
    },
    components: {
      'ag-grid-vue': AgGridVue
    },
    methods: {
      handleCommand(command) {
        this.test = command
        switch (command) {
          case "GREEN":
            this.StatusButton = "success"
            break;
          default:
            this.StatusButton = "primary"
        }
      },
      createRowData() {
        this.rowData = [
          { "Year": "2016", "B-C": "Michael Phelps", "B-O": "2016", "S-C": "Michael Phelps", "S-O": "2016", "F-C": "Michael Phelps", "F-O": "Michael Phelps" },
          { "Year": "2016", "B-C": "Michael Phelps", "B-O": "2016", "S-C": "Michael Phelps", "S-O": "2016", "F-C": "Michael Phelps", "F-O": "Michael Phelps" },
          { "Year": "2016", "B-C": "Michael Phelps", "B-O": "2016", "S-C": "Michael Phelps", "S-O": "2016", "F-C": "Michael Phelps", "F-O": "Michael Phelps" },
          { "Year": "2016", "B-C": "Michael Phelps", "B-O": "2016", "S-C": "Michael Phelps", "S-O": "2016", "F-C": "Michael Phelps", "F-O": "Michael Phelps" },
        ];
      },
      createColumnDefs() {
        this.columnDefs = [
          {
            headerName: 'Year', field: 'Year', width: 60, suppressSorting: true,
            suppressMenu: true, pinned: true
          },
          {
            headerName: 'Budget',
            children: [
              { headerName: "CAPEX", field: "B-C", width: 90, filter: 'text', pinned: true, editable: true },
              { headerName: "OPEX", field: "B-O", width: 90, filter: 'text', pinned: true, editable: true },
            ]
          },
          {
            headerName: 'Submitted PRF',
            children: [
              { headerName: "CAPEX", field: "S-C", width: 90, filter: 'text', pinned: true },
              { headerName: "OPEX", field: "S-O", width: 90, filter: 'text', pinned: true },
            ]
          },
          {
            headerName: 'Forecast Spend',
            children: [
              { headerName: "CAPEX", field: "F-C", width: 90, filter: 'text', pinned: true },
              { headerName: "OPEX", field: "F-O", width: 90, filter: 'text', pinned: true },
            ]
          }
        ];
      },
      readtest(event) {
        this.$http.get('http://localhost:3000/budgetread').then(response => {
            this.rowData= response.body.budgettable.Data
            console.log(response.body.budgettable)
          }, response => {
            console.log(response)
          });
          
      },
      savetest(event) {
        var ModifiedData = '{"id":"test", "Data" :' +  JSON.stringify(this.rowData) + '}'
        console.log(ModifiedData)
        var JsonObj = JSON.parse(ModifiedData)
        this.$http.post('http://localhost:3000/budgetsave',JsonObj).then(response => {

          }, response => {
            console.log(response)
          });

      }
    },
    beforeMount() {
      this.gridOptions = {};
      this.createColumnDefs();
      this.createRowData();
      this.showGrid = true;

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 .el-row {
    margin-bottom: 8px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }

table, td {
    border-collapse: collapse;
    border: 1px solid black;
}

/*ag-grid */
.ag-cell {
        padding-top: 2px !important;
        padding-bottom: 2px !important;
    }
    label {
        font-weight: normal !important;
    }
    .div-percent-bar {
        display: inline-block;
        height: 100%;
        position: relative;
        z-index: 0;
    }
    .div-percent-value {
        position: absolute;
        padding-left: 4px;
        font-weight: bold;
        font-size: 13px;
        z-index: 100;
    }
    .div-outer-div {
        display: inline-block;
        height: 100%;
        width: 100%;
    }
    .ag-menu {
        z-index: 200;
    }
</style>