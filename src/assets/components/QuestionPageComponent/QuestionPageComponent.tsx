import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import QuestionIDEComponent from '../QuestionIDEComponent/QuestionIDEComponent';
import QuestionListComponent from '../QuestionListComponent/QuestionListComponent';

interface Testcases {
    input: string;
    output: string;
}

interface Constraints {
    time: string;
    space: string;
}

interface Question {
    id: number;
    title: string;
    description: string;
    input: string;
    output: string;
    difficulty: string;
    testcases: Testcases[];
    constraints: Constraints;
    tags: string;
}

const QuestionPageComponent: React.FC = () => {
    const [showList, setShowList] = useState(true);
    const [clickedQuestion, setClickedQuestion] = useState<Question | null>(null);
    const navigate = useNavigate();

    const questionsData: Question[] = [
        {
            id: 1,
            title: "Two Sum",
            description: "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.",
            input: "[2,7,11,15], 9",
            output: "[0,1]",
            difficulty: "Easy",
            testcases: [
                { "input": "[2,7,11,15], 9", "output": "[0,1]" },
                { "input": "[3,2,4], 6", "output": "[1,2]" },
                { "input": "[3,3], 6", "output": "[0,1]" },
                { "input": "[2,5,5,11], 10", "output": "[1,2]" },
                { "input": "[1,2,3,4,5], 9", "output": "[3,4]" },
                { "input": "[1, 3, 7, 9, 11], 15", "output": "[1, 3]" },
                { "input": "[0, 4, 3, 0], 0", "output": "[0, 3]" },
                { "input": "[-1, -2, -3, -4, -5], -8", "output": "[2, 4]" },
                { "input": "[1, 1, 1, 1, 1], 2", "output": "[0, 1]" },
                { "input": "[1, 2, 3, 4, 5], 11", "output": "[]" }
            ],
            constraints: { time: "O(n)", space: "O(n)" },
            tags: "Array, Hash Table"
        },
        {
            id: 2,
            title: "Reverse Integer",
            description: "Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-2^31, 2^31 - 1], then return 0.",
            input: "123",
            output: "321",
            difficulty: "Medium",
            testcases: [{ input: "123", output: "321" }, { input: "-123", output: "-321" }],
            constraints: { time: "O(log(x))", space: "O(1)" },
            tags: "Math"
        },
        {
            id: 3,
            title: "Palindrome Number",
            description: "Given an integer x, return true if x is palindrome integer.",
            input: "121",
            output: "true",
            difficulty: "Easy",
            testcases: [{ input: "121", output: "true" }, { input: "-121", output: "false" }],
            constraints: { time: "O(n)", space: "O(1)" },
            tags: "Math"
        },
        {
            id: 4,
            title: "Valid Parentheses",
            description: "Given a string s containing just the characters '(', ')', '{', '}', '[', and ']', determine if the input string is valid.",
            input: "()[]{}",
            output: "true",
            difficulty: "Easy",
            testcases: [{ input: "()[]{}", output: "true" }, { input: "([)]", output: "false" }],
            constraints: { time: "O(n)", space: "O(n)" },
            tags: "Stack, String"
        },
        {
            id: 5,
            title: "Merge Two Sorted Lists",
            description: "Merge two sorted linked lists and return it as a sorted list.",
            input: "[1,2,4], [1,3,4]",
            output: "[1,1,2,3,4,4]",
            difficulty: "Easy",
            testcases: [{ input: "[1,2,4], [1,3,4]", output: "[1,1,2,3,4,4]" }],
            constraints: { time: "O(n + m)", space: "O(1)" },
            tags: "Linked List, Recursion"
        },
        {
            id: 6,
            title: "Remove Duplicates from Sorted Array",
            description: "Given a sorted array nums, remove the duplicates in-place such that each element appears only once and returns the new length.",
            input: "[1,1,2]",
            output: "2",
            difficulty: "Easy",
            testcases: [{ input: "[1,1,2]", output: "2" }],
            constraints: { time: "O(n)", space: "O(1)" },
            tags: "Array, Two Pointers"
        },
        {
            id: 7,
            title: "Remove Element",
            description: "Given an array nums and a value val, remove all instances of that value in-place and return the new length.",
            input: "[3,2,2,3], 3",
            output: "2",
            difficulty: "Easy",
            testcases: [{ input: "[3,2,2,3], 3", output: "2" }],
            constraints: { time: "O(n)", space: "O(1)" },
            tags: "Array, Two Pointers"
        },
        {
            id: 8,
            title: "Implement strStr()",
            description: "Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.",
            input: "hello, ll",
            output: "2",
            difficulty: "Easy",
            testcases: [{ input: "hello, ll", output: "2" }, { input: "aaaaa, bba", output: "-1" }],
            constraints: { time: "O(n * m)", space: "O(1)" },
            tags: "String, Two Pointers"
        },
        {
            id: 9,
            title: "Search Insert Position",
            description: "Given a sorted array and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.",
            input: "[1,3,5,6], 5",
            output: "2",
            difficulty: "Easy",
            testcases: [{ input: "[1,3,5,6], 5", output: "2" }],
            constraints: { time: "O(log n)", space: "O(1)" },
            tags: "Array, Binary Search"
        },
        {
            id: 10,
            title: "Maximum Subarray",
            description: "Given an integer array nums, find the contiguous subarray with the largest sum and return its sum.",
            input: "[-2,1,-3,4,-1,2,1,-5,4]",
            output: "6",
            difficulty: "Medium",
            testcases: [{ input: "[-2,1,-3,4,-1,2,1,-5,4]", output: "6" }],
            constraints: { time: "O(n)", space: "O(1)" },
            tags: "Array, Dynamic Programming"
        },
        {
            id: 11,
            title: "Plus One",
            description: "Given a non-empty array of decimal digits representing a non-negative integer, increment one to the integer.",
            input: "[1,2,3]",
            output: "[1,2,4]",
            difficulty: "Easy",
            testcases: [{ input: "[1,2,3]", output: "[1,2,4]" }],
            constraints: { time: "O(n)", space: "O(1)" },
            tags: "Array, Math"
        },
        {
            id: 12,
            title: "Add Binary",
            description: "Given two binary strings a and b, return their sum as a binary string.",
            input: "11, 1",
            output: "100",
            difficulty: "Easy",
            testcases: [{ input: "11, 1", output: "100" }],
            constraints: { time: "O(max(n, m))", space: "O(max(n, m))" },
            tags: "String, Math"
        },
        {
            id: 13,
            title: "Implement strStr()",
            description: "Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.",
            input: "hello, ll",
            output: "2",
            difficulty: "Easy",
            testcases: [
                { input: "hello, ll", output: "2" },
                { input: "aaaaa, bba", output: "-1" }
            ],
            constraints: { time: "O(n * m)", space: "O(1)" },
            tags: "String, Two Pointer"
        },
        {
            id: 14,
            title: "Search Insert Position",
            description: "Given a sorted array and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.",
            input: "[1,3,5,6], 5",
            output: "2",
            difficulty: "Easy",
            testcases: [
                { input: "[1,3,5,6], 5", output: "2" }
            ],
            constraints: { time: "O(log n)", space: "O(1)" },
            tags: "Array, Binary Search"
        },
        {
            id: 15,
            title: "Maximum Subarray",
            description: "Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.",
            input: "[-2,1,-3,4,-1,2,1,-5,4]",
            output: "6",
            difficulty: "Medium",
            testcases: [
                { input: "[-2,1,-3,4,-1,2,1,-5,4]", output: "6" }
            ],
            constraints: { time: "O(n)", space: "O(1)" },
            tags: "Array, Dynamic Programming"
        },
        {
            id: 16,
            title: "Length of Last Word",
            description: "Given a string s consisting of words and spaces, return the length of the last word in the string.",
            input: "Hello World",
            output: "5",
            difficulty: "Easy",
            testcases: [
                { input: "Hello World", output: "5" },
                { input: "   fly me   to   the moon  ", output: "4" }
            ],
            constraints: { time: "O(n)", space: "O(1)" },
            tags: "String"
        },
        {
            id: 17,
            title: "Plus One",
            description: "Given a non-empty array of decimal digits representing a non-negative integer, increment one to the integer.",
            input: "[1,2,3]",
            output: "[1,2,4]",
            difficulty: "Easy",
            testcases: [
                { input: "[1,2,3]", output: "[1,2,4]" },
                { input: "[9,9,9]", output: "[1,0,0,0]" }
            ],
            constraints: { time: "O(n)", space: "O(1)" },
            tags: "Array, Math"
        },
        {
            id: 18,
            title: "Add Binary",
            description: "Given two binary strings a and b, return their sum as a binary string.",
            input: "11, 1",
            output: "100",
            difficulty: "Easy",
            testcases: [
                { input: "11, 1", output: "100" },
                { input: "1010, 1011", output: "10101" }
            ],
            constraints: { time: "O(max(n, m))", space: "O(1)" },
            tags: "Math, String"
        },
        {
            id: 19,
            title: "Sqrt(x)",
            description: "Given a non-negative integer x, compute and return the square root of x. Since the return type is an integer, the decimal digits are truncated.",
            input: "8",
            output: "2",
            difficulty: "Easy",
            testcases: [
                { input: "8", output: "2" },
                { input: "4", output: "2" }
            ],
            constraints: { time: "O(log x)", space: "O(1)" },
            tags: "Math, Binary Search"
        },
        {
            id: 20,
            title: "Climbing Stairs",
            description: "You are climbing a staircase. It takes n steps to reach the top. Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?",
            input: "3",
            output: "3",
            difficulty: "Easy",
            testcases: [
                { input: "3", output: "3" },
                { input: "4", output: "5" }
            ],
            constraints: { time: "O(n)", space: "O(1)" },
            tags: "Dynamic Programming"
        },
        {
            id: 21,
            title: "Remove Duplicates from Sorted List",
            description: "Given the head of a sorted linked list, delete all duplicates such that each element appears only once.",
            input: "[1,1,2,3,3]",
            output: "[1,2,3]",
            difficulty: "Easy",
            testcases: [
                { input: "[1,1,2,3,3]", output: "[1,2,3]" }
            ],
            constraints: { time: "O(n)", space: "O(1)" },
            tags: "Linked List"
        },
        {
            id: 22,
            title: "Merge Sorted Array",
            description: "Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.",
            input: "[1,2,3,0,0,0], 3, [2,5,6], 3",
            output: "[1,2,2,3,5,6]",
            difficulty: "Easy",
            testcases: [
                { input: "[1,2,3,0,0,0], 3, [2,5,6], 3", output: "[1,2,2,3,5,6]" }
            ],
            constraints: { time: "O(n + m)", space: "O(1)" },
            tags: "Array, Two Pointer"
        },
        {
            id: 23,
            title: "Binary Tree Inorder Traversal",
            description: "Given the root of a binary tree, return the inorder traversal of its nodes' values.",
            input: "[1,null,2,3]",
            output: "[1,3,2]",
            difficulty: "Easy",
            testcases: [
                { input: "[1,null,2,3]", output: "[1,3,2]" }
            ],
            constraints: { time: "O(n)", space: "O(n)" },
            tags: "Tree, Stack"
        }
    ];

    const handleQuestionClick = (question: Question) => {
        setClickedQuestion(question);
        setShowList(false);
        navigate(`/${question.id}`);
    };

    return (
        <div>
            {showList ? (
                <QuestionListComponent questionsData={questionsData} handleQuestionClick={handleQuestionClick} />
            ) : null}

            <Routes>
                <Route path="/" element={questionsData && <QuestionListComponent questionsData={questionsData} handleQuestionClick={handleQuestionClick} />} />
                <Route path="/:id" element={clickedQuestion && <QuestionIDEComponent question={clickedQuestion} />} />
            </Routes>
        </div>
    );
};

export default QuestionPageComponent;
