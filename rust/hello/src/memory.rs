// 内存 OBRM rust由这个控制（可以自己控制，也可以由rust控制）
// RALL: 资源获取即初始化:网络连接，文件句柄，数据库连接C++
// 1. 所有权
// 2. 生命周期
// 3. 引用计数
// 4. 弱引用
struct Car {
    name: String,
    price: u32,
}
// OBRM的资源管理
// 1. 独有
// 2. 共享
// 3. 弱引用
// 4. 自动释放
// 5. 自动释放
// 6. 自动释放
fn memory() {
    let car = Box::new(Car {
        name: String::from("宝马"),
        price: 1000000,
    });
    // 移动语义，car的所有权转移给car2
    let car2 = car;
    // 除非是clone
    let car3 = car2.clone();

    // 所有权转移后，car不再有效
    // println!("{}", car.name);
    println!("{}", car2.name);
}

fn file() {
    let path = Path::new("test.txt");
    let file = File::open(path).unwrap();
    // 读取会在return时关闭
    return file;
}
// 所有权模型
// 1. rust的变量都是所有权变量（对象那些，和js一样）
// 2. 一次只能一个所有者
// 3. 当所有者超出作用域，资源自动释放 （传参时会转移所有权）
fn abc() {
    let file = file();
    // 所有权转移后，file不再有效
    // println!("{}", file.name);
    println!("{}", file.name);
}
