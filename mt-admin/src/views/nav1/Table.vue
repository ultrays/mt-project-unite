<template>
	<section>
		<!--工具条-->
		<el-col :span="24" class="toolbar" style="padding-bottom: 0px;">
			<el-form :inline="true" :model="filters">
				<el-form-item>
					<el-input v-model="filters.name" placeholder="名称"></el-input>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" v-on:click="getItems">查询</el-button>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" @click="handleAdd">新增</el-button>
				</el-form-item>
			</el-form>
		</el-col>

		<!--列表-->
		<el-table :data="items" highlight-current-row v-loading="listLoading" @selection-change="selsChange" style="width: 100%;">
			<el-table-column type="selection">
			</el-table-column>
			<el-table-column type="index" width="80">
			</el-table-column>
			<el-table-column prop="name" label="名称" sortable>
			</el-table-column>
			<el-table-column prop="info" label="信息" sortable>
			</el-table-column>
			<el-table-column prop="priceNow" label="现价" sortable>
			</el-table-column>
			<el-table-column prop="priceMarket" label="门市价" sortable>
			</el-table-column>
			<el-table-column prop="saleCount" label="销量" sortable>
			</el-table-column>
			<el-table-column label="操作" width="150">
				<template scope="scope">
					<el-button size="small" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
					<el-button type="danger" size="small" @click="handleDel(scope.$index, scope.row)">删除</el-button>
				</template>
			</el-table-column>
		</el-table>

		<!--工具条-->
		<el-col :span="24" class="toolbar">
			<el-button type="danger" @click="batchRemove" :disabled="this.sels.length===0">批量删除</el-button>
			<el-pagination layout="prev, pager, next" @current-change="handleCurrentChange" :page-size="20" :total="total" style="float:right;">
			</el-pagination>
		</el-col>

		<!--编辑界面-->
		<el-dialog title="编辑" v-model="editFormVisible" :close-on-click-modal="false">
			<el-form :model="editForm" label-width="80px" :rules="editFormRules" ref="editForm">
				<el-form-item label="名称">
					<el-input v-model="editForm.name" auto-complete="off"></el-input>
				</el-form-item>
				<el-form-item label="信息">
					<el-input v-model="editForm.info" auto-complete="off"></el-input>
				</el-form-item>
				<el-form-item label="现价">
					<el-input-number v-model="editForm.priceNow"  :min="0" ></el-input-number>
				</el-form-item>
				<el-form-item label="门市价">
					<el-input-number v-model="editForm.priceMarket" :min="0" ></el-input-number>
				</el-form-item>
				<el-form-item label="销量">
					<el-input-number v-model="editForm.saleCount" :min="0" ></el-input-number>
				</el-form-item>
			</el-form>
			<div slot="footer" class="dialog-footer">
				<el-button @click.native="editFormVisible = false">取消</el-button>
				<el-button type="primary" @click.native="editSubmit" :loading="editLoading">提交</el-button>
			</div>
		</el-dialog>

		<!--新增界面-->
		<el-dialog title="新增" v-model="addFormVisible" :close-on-click-modal="false">
			<el-form :model="addForm" label-width="80px" :rules="addFormRules" ref="addForm">
				<el-form-item label="名称">
					<el-input v-model="addForm.name" auto-complete="off"></el-input>
				</el-form-item>
				<el-form-item label="信息">
					<el-input v-model="addForm.info" auto-complete="off"></el-input>
				</el-form-item>
				<el-form-item label="现价">
					<el-input-number v-model="addForm.priceNow" :min="0" ></el-input-number>
				</el-form-item>
				<el-form-item label="门市价">
					<el-input-number v-model="addForm.priceMarket" :min="0" ></el-input-number>
				</el-form-item>
				<!--<el-form-item label="性别">-->
					<!--<el-radio-group v-model="addForm.sex">-->
						<!--<el-radio class="radio" :label="1">男</el-radio>-->
						<!--<el-radio class="radio" :label="0">女</el-radio>-->
					<!--</el-radio-group>-->
				<!--</el-form-item>-->
				<el-form-item label="销量">
					<el-input-number v-model="addForm.saleCount" :min="0" ></el-input-number>
				</el-form-item>
				<!--<el-form-item label="地址">-->
					<!--<el-input type="textarea" v-model="addForm.addr"></el-input>-->
				<!--</el-form-item>-->
			</el-form>
			<div slot="footer" class="dialog-footer">
				<el-button @click.native="addFormVisible = false">取消</el-button>
				<el-button type="primary" @click.native="addSubmit" :loading="addLoading">提交</el-button>
			</div>
		</el-dialog>
	</section>
</template>

<script>
	import util from '../../common/js/util'
	//import NProgress from 'nprogress'
	import { getUserListPage, removeUser, batchRemoveUser, editUser, addUser } from '../../api/api';

	export default {
		data() {
			return {
				filters: {
					name: ''
				},
				items: [],
				total: 0,
				page: 1,
				listLoading: false,
				sels: [],//列表选中列

				editFormVisible: false,//编辑界面是否显示
				editLoading: false,
				editFormRules: {
					name: [
						{ required: true, message: '请输入姓名', trigger: 'blur' }
					]
				},
				//编辑界面数据
				editForm: {
                    id: "",
                    name: "",
                    info: "",
                    priceNow: 0,
                    priceMarket: 0,
                    saleCount: 0
				},

				addFormVisible: false,//新增界面是否显示
				addLoading: false,
				addFormRules: {
					name: [
						{ required: true, message: '请输入姓名', trigger: 'blur' }
					]
				},
				//新增界面数据
				addForm: {
				    id: "",
					name: "",
					info: "",
					priceNow: 0,
					priceMarket: 0,
					saleCount: 0
				}

			}
		},
		methods: {
			//性别显示转换
			formatSex: function (row, column) {
				return row.sex == 1 ? '男' : row.sex == 0 ? '女' : '未知';
			},
			handleCurrentChange(val) {
				this.page = val;
				this.getUsers();
			},
			//获取用户列表
			getUsers() {
				let para = {
					page: this.page,
					name: this.filters.name
				};
				this.listLoading = true;
				//NProgressItems.start();
				getUserListPage(para).then((res) => {
					this.total = res.data.total;
					this.users = res.data.users;
					this.listLoading = false;
					// NProgress.done();
				});
			},
			//删除
			handleDel: function (index, row) {
				this.$confirm('确认删除该记录吗?', '提示', {
					type: 'warning'
				}).then(() => {
					this.listLoading = true;
					// NProgress.start();
					// let para = { name: row.name };
					// removeUser(para).then((res) => {
					// 	this.listLoading = false;
					// 	//NProgress.done();
					// 	this.$message({
					// 		message: '删除成功',
					// 		type: 'success'
					// 	});
					// 	this.getUsers();
					// });
					console.log(row.id)
                    this.deleteItem(row.id,()=>{
                       	this.listLoading = false;
						this.$message({
							message: '删除成功',
							type: 'success'
						});
					});
				}).catch(() => {

				});
			},
			//显示编辑界面
			handleEdit: function (index, row) {
				this.editFormVisible = true;
				this.editForm = Object.assign({}, row);
			},
			//显示新增界面
			handleAdd: function () {
				this.addFormVisible = true;
				this.addForm = {
				    id: '',
                    name: '',
                    info: '',
                    priceNow: 0,
                    priceMarket: 0,
                    saleCount: 0
				};
			},
			//编辑
			editSubmit: function () {
				this.$refs.editForm.validate((valid) => {
					if (valid) {
						this.$confirm('确认提交吗？', '提示', {}).then(() => {
							this.editLoading = true;
							//NProgress.start();
							// let para = Object.assign({}, this.editForm);
							// para.birth = (!para.birth || para.birth == '') ? '' : util.formatDate.format(new Date(para.birth), 'yyyy-MM-dd');
							// editUser(para).then((res) => {
							// 	this.editLoading = false;
							// 	//NProgress.done();
							// 	this.$message({
							// 		message: '提交成功',
							// 		type: 'success'
							// 	});
							// 	this.$refs['editForm'].resetFields();
							// 	this.editFormVisible = false;
							// 	this.getUsers();
							// });
                            let para = Object.assign({}, this.editForm);
                            this.editItem(para, ()=>{
                                this.editLoading = false;
                                this.$message({
                                    message: '编辑成功',
                                    type: 'success'
                                });
                                this.$refs['editForm'].resetFields();
                                this.editFormVisible = false;
                            });
						});
					}
				});
			},
			//新增
			addSubmit: function () {
				this.$refs.addForm.validate((valid) => {
					if (valid) {
						this.$confirm('确认提交吗？', '提示', {}).then(() => {
							this.addLoading = true;
							//NProgress.start();
							let para = Object.assign(this.addForm,{id:PrefixInteger(this.items.length+1,5)});//将id补全5位
							this.addItem(para, ()=>{
                                this.addLoading = false;
                                this.$message({
                                    message: '提交成功',
                                    type: 'success'
                                });
                                this.$refs['addForm'].resetFields();
                                this.addFormVisible = false;
                            });
							// addUser(para).then((res) => {
							// 	this.addLoading = false;
							// 	//NProgress.done();
							// 	this.$message({
							// 		message: '提交成功',
							// 		type: 'success'
							// 	});
							// 	this.$refs['addForm'].resetFields();
							// 	this.addFormVisible = false;
							// 	this.getItems();
							// });

						});
					}
				});
			},
			selsChange: function (sels) {
				this.sels = sels;
			},
			//批量删除
			batchRemove: function () {
				var ids = this.sels.map(item => item.id).toString();
				this.$confirm('确认删除选中记录吗？', '提示', {
					type: 'warning'
				}).then(() => {
					this.listLoading = true;
					//NProgress.start();
					let para = { ids: ids };
					batchRemoveUser(para).then((res) => {
						this.listLoading = false;
						//NProgress.done();
						this.$message({
							message: '删除成功',
							type: 'success'
						});
						this.getUsers();
					});
				}).catch(() => {

				});
			},
			//获取列表
			getItems:function () {
                fetch(`http://localhost:3000/api/crud/retrieve?name=${this.filters.name}`).then(res=>{
                    res.json().then(data=>{
                        console.log(data);
                        this.items=data;
                    })
                })
            },
			//删除项目
			deleteItem:function (id,func) {
                fetch(`http://localhost:3000/api/crud/delete?id=${id}`).then(res=>{
                    res.json().then(data=>{
           				console.log(data);
                 		this.items=data;
                 		func();
                    })
                })
            },
			//添加项目
			addItem:function (params,func) {
				// console.log(params);
                fetch("http://localhost:3000/api/crud/create",{
                   	method: "POST",
					headers: {"Content-Type": "application/json;charset=utf-8"},
					body: JSON.stringify(params)
					// mode: 'no-cors'
                }).then((res)=>{
                    res.json().then(data=> {
                        console.log(data);
                        this.items = data;
                        func();
                    })
				});
            },
			//编辑项目
			editItem:function (params,func) {
				// console.log(params);
                fetch("http://localhost:3000/api/crud/update",{
                   	method: "POST",
					headers: {"Content-Type": "application/json;charset=utf-8"},
					body: JSON.stringify(params)
					// mode: 'no-cors'
                }).then((res)=>{
                    res.json().then(data=> {
                        console.log(data);
                        this.items = data;
                        func();
                    })
				});
            }
		},
		mounted() {
			// this.getUsers();
            this.getItems();
		}
	}

	//将id数字用0补全位数
    function PrefixInteger(num, length) {
        return (Array(length).join('0') + num).slice(-length);
    }
</script>

<style scoped>

</style>