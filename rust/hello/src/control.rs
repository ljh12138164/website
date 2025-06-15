fn control(x: u16) -> u16 {
    // if else循环
    if (x > 4) {
        return x * 4;
    } else if (x < 2) {
        return x / 4;
    } else {
        return x;
    }
    // let中可以使用
    let a = if (x > 4) { 4 } else { 2 };

    // 循环 'outer：可以在嵌套的loop中直接终止循环
    'outer: loop {
        break;
    }
    // while
    while x > 1 {}
}
