
class Solution {
private:
    int binarySearch(int x, vector<vector<int>>& arr) {
        int low = 0, high = arr.size() - 1;
        int mid = 0;
        while (low <= high) {
            mid = low + (high - low) / 2;

            // Check if x is present at mid
            if (arr[mid][0] == x)
                return mid;

            // If x greater, ignore left half
            if (arr[mid][0] < x)
                low = mid + 1;

            // If x is smaller, ignore right half
            else
                high = mid - 1;
        }
        // If we reach here, then element was
        // not present
        return arr[mid][0] > x ? mid - 1 : mid;
    }

public:
    int maxProfitAssignment(vector<int>& difficulty, vector<int>& profit, vector<int>& worker) {
        vector<vector<int>> profits(difficulty.size(), vector<int>(2));
        for (int i = 0; i < profit.size(); i++) {
            profits[i][0] = difficulty[i];
            profits[i][1] = profit[i];
        }

        sort(profits.begin(), profits.end(), [](vector<int>& a, vector<int>& b) {
            return a[0] == b[0] ? b[1] - a[1] : a[0] - b[0];
        });

        int maxProfit = 0;
        for (int i = 0; i < profit.size(); i++) {
            if (maxProfit <= profits[i][1]) {
                maxProfit = profits[i][1];
            }
            profits[i][1] = maxProfit;
        }

        int ans = 0;
        for (int i : worker) {
            int index = binarySearch(i, profits);
            if (index == -1) {
                continue;
            }
            ans += profits[index][1];
        }
        return ans;
    }
};
