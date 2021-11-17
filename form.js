function buat_login(){
    let elem = document.getElementById("X")
    elem.parentElement.removeChild(elem)
    let p = document.createElement("p")
    p.className="tulisan_login"
    p.innerHTML="Silahkan Login"
    let elemen = document.getElementsByTagName("div")[0]
    elemen.appendChild(p)
    let from = document.createElement("form")
    elemen.appendChild(from)
    let label= document.createElement("label")
    label.innerHTML="Nama User"
    from.appendChild(label)
    let nama_user = document.createElement("input")
    nama_user.type="text"
    nama_user.value="Nama User..."
    nama_user.className="form_login"
    from.appendChild(nama_user)
    let label2= document.createElement("label")
    label2.innerHTML="Nomor Handphone"
    from.appendChild(label2)
    let no_hp = document.createElement("input")
    no_hp.type="number"
    no_hp.value="Nomor Handphone..."
    no_hp.className="form_login"
    from.appendChild(no_hp)
    let label3= document.createElement("label")
    label3.innerHTML="Username"
    from.appendChild(label3)
    let Username = document.createElement("input")
    Username.type="email"
    Username.value="Username atau email..."
    Username.className="form_login"
    from.appendChild(Username)
    let label4= document.createElement("label")
    label4.innerHTML="password"
    from.appendChild(label4)
    let password = document.createElement("input")
    password.type="password"
    password.value="password..."
    password.className="form_login"
    from.appendChild(password)
    let masuk = document.createElement("input")
    masuk.type="submit"
    masuk.value="DAFTAR SEKARANG"
    masuk.className="tombol_login"
    from.appendChild(masuk)
}