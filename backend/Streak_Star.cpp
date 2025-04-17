#include <bits/stdc++.h>

using namespace std;
//_-_-_-_-_-_-_-_-_-_-_-Definition section-_-_-_-_-_-_-_-_-_-_-_-_-_-
#define ll long long
#define print(x) cout << #x << " " << x << endl
#define vi vector<int>
#define mii map<int, int>
#define vvi vector<vector<int>>
#define sort(num) sort(num.begin(), num.end())

vector<int> iv(int n)
{
    int x;
    vector<int> nums(n);
    for (int i = 0; i < n; ++i)
    {
        cin >> nums[i];
    }
    return nums;
}

vvi ivv(int n, int m)
{
    vvi nums(n);
    for (int i = 0; i < n; i++)
    {
        vi num = iv(m);
        nums[i] = num;
    }
    return nums;
}
void printVector(vector<int> nums)
{
    for (auto num : nums)
    {
        cout << num << " ";
    }
    cout << endl;
}
//_-_-_-_-_-_-_-_-_-_-_-_-solution section-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-
void solve()
{
    int n, x;
    cin >> n >> x;
    vi nums = iv(n);

    int left = 0;
    int right = 0;
    int maxi = 0;

    while (left < n and right < n)
    {

        right = left;
    }
}
//_-_-_-_-_-_-_-_-_-_-_-Main Section
int main()
{
#ifndef ONLINE_JUDGE
    freopen("input.txt", "r", stdin);
    freopen("output.txt", "w", stdout);
#endif

    ll t = 1;
    cin >> t;
    while (t > 0)
    {
        solve();
        t--;
    }
    return 0;
}