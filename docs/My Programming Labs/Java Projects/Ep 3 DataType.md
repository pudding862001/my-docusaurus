---
title: Ep3 DataType
hide_title: true
sidebar_label: Ep3 DataType
sidebar_position: 3
---

## Ep3 DataType

* Learn the eight **primitive data types** in Java, ranging from basic integers to logical booleans.

* **The Eight Primitive Data Types:**
  <ul style={{ marginTop: '-12px', lineHeight: '1.5' }}>
    <li style={{ marginBottom: '6px' }}>
      <span style={{ fontSize: '14.5px' }}>**Integral Types:**</span>
      <ul style={{ marginTop: '2px', lineHeight: '1.3' }}>
        <li><span style={{ fontSize: '13.5px', color: '#666' }}>`byte`: 8-bit (-128 to 127)</span></li>
        <li><span style={{ fontSize: '13.5px', color: '#666' }}>`short`: 16-bit (-32,768 to 32,767)</span></li>
        <li><span style={{ fontSize: '13.5px', color: '#666' }}>`int`: 32-bit (-2,147,483,648 to 2,147,483,647)</span></li>
        <li><span style={{ fontSize: '13.5px', color: '#666' }}>`long`: 64-bit (Large integer values)</span></li>
      </ul>
    </li>
    <li style={{ marginBottom: '6px' }}>
      <span style={{ fontSize: '14.5px' }}>**Floating-Point Types:**</span>
      <ul style={{ marginTop: '2px', lineHeight: '1.3' }}>
        <li><span style={{ fontSize: '13.5px', color: '#666' }}>`float`: 32-bit (Single precision)</span></li>
        <li><span style={{ fontSize: '13.5px', color: '#666' }}>`double`: 64-bit (Double precision)</span></li>
      </ul>
    </li>
    <li style={{ marginBottom: '6px' }}>
      <span style={{ fontSize: '14.5px' }}>**Other Types:**</span>
      <ul style={{ marginTop: '2px', lineHeight: '1.3' }}>
        <li><span style={{ fontSize: '13.5px', color: '#666' }}>`char`: 16-bit Unicode character</span></li>
        <li><span style={{ fontSize: '13.5px', color: '#666' }}>`boolean`: Logical value (true or false)</span></li>
      </ul>
    </li>
  </ul>

```java
public class Main {
    public static void main(String[] args) {

        //Eight Primary Data Types In Java
        //Integer - int, short, long, byte
        //byte = 8 width = -128 to 127
        //short = 16 width = -32768 to 32767
        //int = 32 width = -2147483648 to 2147483647
        //long = 64 width

        //Bad Example
        //byte bob = 500;

        short shortboy = 32000;
        System.out.println(shortboy);


        //floating - float and double

        //double = 64 width in Bits

        // float = 32 width in Bits

        //bad example

        //float myBankAccount = 12.99f;


        //"f" = force it to be a float without error

        float myBankAccount = 12.99f;
        System.out.println(myBankAccount);
        //double
        double ricepower = 0.67827497187912;
        System.out.println(ricepower);

        //Area of a circle

        double pi, r, a;
        r = 8.7;
        pi = 3.1416;
        a = pi * r * r;
        System.out.println("The Area is " + a);

        //character - char

        char letter = 'A';
        System.out.println(letter);

        //Print unicode
        //https://unicode-table.com/en/

        char uni = '\u00C3';
        System.out.println(uni);

        char unicode ='\u1699';
        System.out.println(unicode);

        //Print unicode by number

        char numcode = 437;
        System.out.println(numcode);

        char unicode2 = 174;
        System.out.println(unicode2);

        //Loop

        char bobby = 1;
        for (int i = 0; i < 50000; i++){
            bobby++;
            System.out.println(bobby);
        }


        //boolean - boolean
        boolean imCool = true;
        boolean paxtonIsCool = false;
        System.out.println(imCool);
        System.out.println(paxtonIsCool);
    }
}
```
