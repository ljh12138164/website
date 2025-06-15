// 常量,不可变
const MAX_VALUE: u16 = 14;
// 可变的
static mut NAME: &str = "Rust";
// 自定义函数，输入和返回值
fn my_start(x: u16) -> u16 {
    // 不可变
    let a: i64 = 123;
    // 可变性
    let mut ab: i64 = 123;
    ab = 13;

    // 阴影
    let c: u16 = 1424;
    let c: u16 = 142;
    // 生效
    let c: u16 = 14;
    println!("c is {c}");
    // 作用域
    {
        let c: u16 = 3;
        println!("c is {c},{x}");
    }
    return x;
}

// 类型 bool 布尔
// 无符号整形 u8u16u32u64  必须是>0
// 符号整形 i8i16i32i64  随便
// 浮点形 f1f2

// usize isize 指针

// 字符串 char('c') &str("hello")  String String::form("hello")

// 数组:保存多个相同的类 [类型，数量] 获取:a[索引]

// 元组:保存多个不同的类 （类型，类型） 获取:a(索引)
