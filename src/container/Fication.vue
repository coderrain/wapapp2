<template>
    <div>
        <top></top>
        <div class="search">
			<input @click="ipt" ref="int" type="" name="" placeholder="搜素商品">
        </div>
    <div class="main">
    	<div class="list">
    		<ul>
				<li 
                :class="{active:item.id==isActive}" 
                @click="fn(item.id,$event)" 
                v-for=" item in brand"
                >
					{{ item.name }}
                
				</li>
			</ul>
    	</div>
    	<div class="show">
    		<ul>
				<li v-for="item in list">
					<img :src="item.url" alt="">	
					
				</li>
			</ul>
    	</div>
    </div>
    </div>
</template>

<script>
   	import Top from '../components/common/Top.vue'
    export default {
        name: "Fication",
        data(){
        	return {
        		brand:[],
        		list:[],
                isActive:1
        	}
        },
        components:{
        	'top':Top,
        },
        created(){
            this.fn(1)
        	this.$axios.get('/api/shopMark').then(data=>{
        		this.brand = data.data.data
        	})
        },
        methods:{
        	fn(item,event){
                this.isActive = item
                this.$axios.get('/api/shopList',{
                    params:{
                        shopId:item
                    }
                }).then(data=>{
                    this.list =  data.data.data
                })
        	},
            ipt(){
               this.$router.push('/search')
            }
        }
        	
    }
</script>

<style scoped lang="less">


.search{
	border-radius:0.3rem;
	margin-top:0.44rem;
	margin-left:0.28rem;
	height:0.6rem;
	input::-webkit-input-placeholder {
        text-align: center;
    }
	input{
		background:#f6f7f8 url('../assets/image/24.png') no-repeat 2.1rem;
		background-size:0.4rem 0.4rem;
		margin-left:0.6rem;
		border-radius:0.3rem;
		float:left;
		border:0;
		height:0.6rem;
		width:6rem;
	}
	button{
		font-size:0.24rem;
		width:1.24rem;
		height:0.6rem;
		background:#09c7c7;
		border:0;
		border-radius:0.15rem;
		margin-left:0.15rem;
	}
}
.main{
 	.list{
        margin-top:0.23rem;
 		float:left;
 		width:1.82rem;
 		li{
 			width:1.82rem;
 			height:1.03rem;
 			background:#eff3f2;
 			font-size:0.35rem;
 			text-align:center;
 			line-height:0.9rem;
 		}
        .active{
            background:#fff;
        }
 	}
 	.show{
 		li{
 			float:left;
 			width:1.89rem;
 			height:1.89rem;
 			margin-top:0.51rem;
 			img{
	 				width:1.2rem;
	 				height:1.2rem;
	 				margin-top:0.35rem;
	 				margin-left:0.35rem;
 			}
 				
 			
 		}
 	}
 }
</style>