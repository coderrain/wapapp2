<template>
    <div>
        <h-header></h-header>
		<div class="search">
			<input @focus="focusSearch" type="" name="">
			<div class="hot">
				<h3>热搜</h3>
				<span v-for="item in hotSearchList">
					<router-link :to="{path:'/search',query:{name: item.name}}">{{ item.name }}</router-link>
				</span>

			</div>

		</div>
       	<div class="swiper">
			<div class="top"></div>
			<img :src="banner">
       	</div>
        <Menu></Menu>
        <div class="enough">
            <img src="../assets/image/1.png">
        </div>
        <div class="choes">
            <ul>
                <li class="left"><img src="../assets/image/11.png"></li>
                <li class="right"><img src="../assets/image/12.png"></li>
                <li class="left"><img src="../assets/image/13.png"></li>
                <li class="right"><img src="../assets/image/14.png"></li>
            </ul>
        </div>
        <div class="popul">
            <img src="../assets/image/15.png">
            <span>人气精选</span>
        </div>
        <div class="list">
            <ul>
                <li>
                    <div>
                        <img v-lazy="'http://e.hiphotos.baidu.com/image/h%3D300/sign=907f6e689ddda144c5096ab282b6d009/dc54564e9258d1092f7663c9db58ccbf6c814d30.jpg'">
                    </div>
                    <p>耐克 NIKE 男子 跑步鞋 FlEX EXPERIENCE RN8 运动鞋</p>
                    <span>￥419.00</span>
                    <span class="people">274人付款</span>
                </li>
                <li class="nv">
                    <div>
                        <img v-lazy="'http://f.hiphotos.baidu.com/image/h%3D300/sign=0c78105b888ba61ec0eece2f713597cc/0e2442a7d933c8956c0e8eeadb1373f08202002a.jpg'">
                    </div>
                    <p>耐克 NIKE 2019春夏新款 ZOOM PEGUSOS 35 RBO 女子运动跑步鞋</p>
                    <span>￥1569.00</span>
                    <span class="people">274人付款</span>
                </li>
                <li>
                    <div>
                        <img src="../assets/image/16.png">
                    </div>
                    <p>耐克 NIKE 2019春夏新款 ZOOM PEGUSOS 35 RBO 女子运动跑步鞋</p>
                    <span>￥419.00</span>
                    <span class="people">274人付款</span>
                </li>
                <li class="nv">
                    <div>
                        <img src="../assets/image/17.png">
                    </div>
                    <p>耐克 NIKE 2019春夏新款 ZOOM PEGUSOS 35 RBO 女子运动跑步鞋</p>
                    <span>￥1569.00</span>
                    <span class="people">274人付款</span>
                </li>
            </ul>

        </div>
    </div>
</template>

<script>
    import Hheader from '../components/Home/Hheader.vue'
    import Menu from '../components/Home/Menu.vue'
    import { hotSearchListFn } from "../api/index";

    export default {
        name: "Home",
        components: {
            'h-header': Hheader,
            'Menu':Menu
        },
		data(){
        	return {
				hotSearchList: [],
				banner: require( '../assets/image/2.png')
			}
		},
		created(){
            hotSearchListFn().then(res=>{
                let { data } = res;
                this.hotSearchList = data.list
            })
		},
		methods: {
			focusSearch(){
				this.$router.push('/search')
			}
		}
    }
</script>

<style scoped lang="less">
.search{
	height:1.55rem;
	background:#51dfe0;
	input{
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
            width:3.52rem;
            height:1.84rem;
        }
        height:3.56rem;
        margin-top:0.1rem;
    }
    .left{
        background:green;
        width:3.51rem;
        height:1.7rem;
        margin-left:0.18rem;
        margin-right:0.1rem;
        float:left;
        border-radius:0.1rem;
    }
    .right{
        background:green;
        width:3.51rem;
        border-radius:0.1rem;
        height:1.7rem;
        margin-right:0.2rem;
        float:left;
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
</style>