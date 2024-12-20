3. Longest Substring Without Repeating Characters
class Solution {
public:
    int lengthOfLongestSubstring(string s) {
         // initiate max length, left right pointer at 0
    int maxLen = 0, left = 0, right = 0;
	// initiate all character count at 0
    vector<int> count(256,0);

	// continue looping until right pointer reached end
    while(right<s.size()){
		// if the character hasn't appeared in the substring before
        if(count[s[right]]==0){
            count[s[right]]++;  // increment to mark that it's appeared
			right++;   // expand window
        } else {
            count[s[left]]=0;  // set the character at left as unvisited as it will be removed from the current substring
			left++; // narrow the window
        }
		// get the maximum length
        maxLen = max(maxLen, right-left);
    }

    return maxLen;
    }
};
