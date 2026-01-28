---
title: LC 844 Backspace String Compare
sidebar_label: LC 844 Backspace String Compare
sidebar_position: 6
hide_title: true
---

## LC 844 Backspace String Compare

Given two strings s and t, return true if they are equal when both are typed into empty text editors. '#' means a backspace character. Note that after backspacing an empty text, the text will continue empty.

```cpp
class Solution {
public:
    bool backspaceCompare(string s, string t) {
        int i=s.size()-1;
        int j=t.size()-1;
        int skipS=0;
        int skipT=0;
        while (i >= 0 || j >= 0){
            //check s string
            while (i >= 0){
                if(s[i]=='#'){
                    //Get skipS debit
                    skipS++;
                    i--;
                }else if(skipS>0){
                    //balance the debit
                    skipS--;
                    i--;
                }else{
                    //jump out, prepare to compare
                    break;
                }

            }

            while (j >= 0){
                if(t[j]=='#'){
                    //Get skipT debit
                    skipT++;
                    j--;
                }else if(skipT>0){
                    //balance the debit
                    skipT--;
                    j--;
                }else{
                    //jump out, prepare to compare
                    break;
                }
            }

            //Chech if string size are equal
            if((i>=0) !=(j>=0)){
                return false;
            }

            if(i>=0 && j>=0){
                if(s[i]!=t[j]){
                    return false;
                }

            }

            i--;
            j--;
        }
        return true;
    }
};
```