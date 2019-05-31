export const alert = (msg)=>{
        let oDiv = document.createElement('div')
        oDiv.innerHTML = `
            <div style="position:fixed;top:100px;le
            100px;">${msg}</div>
        `;

        document.body.appendChild(oDiv)

}

export const confirm = ()=>{}
export const prompt = ()=>{}
