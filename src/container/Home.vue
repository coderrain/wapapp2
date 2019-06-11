<template>
    <div>
        <h-header></h-header>
		<div class="search">
			<input placeholder="搜索页面" @focus="focusSearch" type="" name="">
			<div class="hot">
				<h3>热搜</h3>
				<span v-for="item in hotSearchList">
					<router-link :to="{path:'/search',query:{name: item.title}}">{{ item.title }}</router-link>
				</span>

			</div>

		</div>
       	<div class="swiper">
			<div class="top"></div>
			<img src="../assets/image/2.png">
       	</div>
        <div class="menu">
          <div class="nav">
            <ul>
                <li v-for="item in shopList">
                    <div>
                        <img :src="item.url">
                        <p>{{ item.name }}</p>
                    </div>
                </li>
            </ul>
          </div>  
        </div>
        <div class="enough">
            <img src="../assets/image/1.png">
        </div>
        <div class="choes">
            <ul>
                <li v-for=" item in shopJordan">
                    <img :src="item.imgUrl">
                </li>
            </ul>
        </div>
        <div class="popul">
            <img src="../assets/image/15.png">
            <span>人气精选</span>
        </div>
        <div ref="list" class="list">
            <ul>
                <li v-for="item in shopShoes">
                    <router-link :to="{name:'part',params:{id:item.id}}">
                        <div>
                            <img v-lazy="item.url[0]">
                        </div>
                        <p>{{ item.title }}</p>
                        <span>￥{{item.price}}</span>
                        <span class="people">{{item.chose}}人付款</span>
                    </router-link>
                </li>
            </ul>
        </div>
        <div class="all" v-if="isshow">全部加载成功</div>
    </div>
</template>

<script>
    import Hheader from '../components/Home/Hheader.vue'
    export default {
        name: "Home",
        components: {
            'h-header': Hheader,
        },
		data(){
        	return {
				hotSearchList:[],
				banner: '',
                shopList:[],
                shopJordan:[],
                shopShoes:[],
                count:0,
                isshow:false
			}
		},
        created(){
            this.getHotList()
            this.getList()
            this.getJor()
            this.getShopShoes()
            this.getLoadMore()
        },
		methods: {
			focusSearch(){
				this.$router.push('/search')
			},
            getHotList(){
                this.$axios.get('/api/shopList',{
                    params:{
                        "hot":1
                    }
                }).then(data=>{
                   this.hotSearchList = data.data.data
                   
                })
            },
            getList(){
                this.$axios.get('/api/shopMark',{
                    params:{
                        page:1,
                        pageSize:8
                    }
                }).then(data=>{
                   this.shopList = data.data.data
                })
            },
            getJor(){
                 this.$axios.get('/api/ad').then(data=>{
                   this.shopJordan = data.data.data
                })
            },
            getShopShoes(){
                this.$axios.get('/api/shopListPage',{
                    params:{
                        page:++this.count,
                        pageSize:2
                    }
                }).then(data=>{
                    this.shopShoes = this.shopShoes.concat(data.data.data)
                    if(data.data.data.length<2){
                       window.onscroll = null
                       this.isshow = true
                       return false
                    }
                    
                })
            },
            getLoadMore(){
               window.onscroll = ()=>{
                 var w = document.documentElement || document.body
                 var Wh = w.clientHeight + w.scrollTop
                 var  list = this.$refs.list
                 var lT = list.offsetTop + list.offsetHeight
                    if(lT+20<Wh){
                       this.getShopShoes() 
                    }
               }
            }
		}
    }
</script>

<style scoped lang="less">
.search{
	height:1.55rem;
	background:#51dfe0;
    input::-webkit-input-placeholder {
        padding-left:0.6rem;
    }
	input{
		background:#fff url('../assets/image/24.png') no-repeat 0.15rem;
		background-size:5%;
		margin-top:0.15rem;
		margin-bottom:0.06rem;
		height:0.6rem;
		width:6.94rem;
		margin-left:0.28rem;
		border:0;
		border-radius:0.26rem;
	}
	.hot{
		height:0.73rem;
		h3{
			margin-bottom:0.28rem;
			margin-left:0.28rem;
			font-size:0.26rem;
			color:#fff;
			margin-top:0.12rem;
			float:left;
			padding-right:0.12rem;
		}
		span{
			display:block;
			float:left;
			width:1.44rem;
			margin-top:0.06rem;
			margin-left:0.08rem;
			margin-right:0.08rem;
			background:#75e1e1;
			border-radius:0.2rem;
			text-align:center;
			color:#fff;
			height:0.4rem;
			line-height:0.4rem;
		}
		a{
		 color:#fff;
		}
	}
}
.swiper{
	position: relative;
	height:2.6rem;
	.top{
		height:1.88rem;
		background:#53dfe0;
		border-radius:0rem 0rem 0.5rem 0.5rem;	
	}
	img{
		z-index:10;
		border-radius:0.06rem;
		top:0;
		position:absolute;
		height:2.6rem;
		width:7.1rem;
		margin-left:0.2rem;
	}
}
.enough{
    height:1.7rem;
    padding-bottom:0.1rem;
    img{
        width:7.1rem;
        height:1.7rem;
        margin-left:0.2rem;
    }
}
.choes{
    ul{
        img{
            width:3.5rem;
            height:1.7rem;
            float:left;
            margin-left:0.2rem;
            margin-top:0.1rem;
        }
        height:3.56rem;
        margin-top:0.1rem;
        
    }
}
.popul{
    img{
        padding-right:0.08rem;
        margin-left:0.2rem;
        margin-top:0.38rem;
        width:0.35rem;
        height:0.35rem;
    }
    height:1.1rem;
    width:100%;
    span{
        color:#000;
        font-size:0.32rem;
    }
}
.list{
    ul{
        margin: 0 0.2rem;
    }
    .nv{
        margin-left:0.1rem;
    }
    li{
        float:left;
        img{
            height:3.42rem;
            width:3.5rem;
        }
        p{
            width:3.1rem;
            font-size:0.28rem;
            margin-left:0.2rem;
            color:#282828;
            margin-right:0.2rem;
            padding-bottom:0.4rem;
        }
        span{
            float:left;
            display:block;
            margin-left:0.2rem;
            font-size:0.28rem;
            color:#F63131;
            padding-bottom:0.54rem;
        }
        .people{
            font-size:0.24rem;
            color:#888888;
            margin-left:0.43rem;
            margin-top:0.05rem;
        }
    }
}
.nav{
    height:3.82rem;
    li{
        float:left;
        width:1.87rem;
        img{
            width:0.9rem;
            height:0.9rem;
            margin-left:0.5rem;
            margin-top:0.34rem;
        }
        p{
            margin-top:0.16rem;
            text-align:center;
            font-size:0.2rem;
            color:#353535;
        }
    }
}
.all{
    font-size:0.2rem;
    width:100%;
    height:0.2rem;
    text-align:center;
    line-height:0.2rem;
    color:red; 
    overflow: hidden;
}
</style>