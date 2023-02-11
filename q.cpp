#include<iostream>
using namespace std;
int main(){
    int n;
    cin>>n;
    int arr[n];
    
     for(int i=0;i<n;i++){
         cin>>arr[i];
    }
    int j=1;
    for(int i=1;i<n;i++){
        if(arr[i]!=arr[i-1]){
            arr[j++]=arr[i];
        }
    }
while(j>=1){
    cout<<arr[j];
    j--;
}
    return 0;
}
