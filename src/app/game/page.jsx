'use client';
import { useState, useEffect } from 'react';
import './components/XO.css';
import './components/MXO.css';
import './components/GuessWord.css'
const initialBoard = ['', '', '', '', '', '', '', '', ''];

function ServicesPage() {
    const [board, setBoard] = useState(initialBoard);
    const [playerTurn, setPlayerTurn] = useState(true); // true = user, false = bot
    const [winner, setWinner] = useState(null);
    const [randomNumber, setRandomNumber] = useState(null); // เก็บตัวเลขสุ่ม

    // ตรวจสอบการชนะ
    const checkWinner = (board) => {
        const winPatterns = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], // แนวนอน
            [0, 3, 6], [1, 4, 7], [2, 5, 8], // แนวตั้ง
            [0, 4, 8], [2, 4, 6],            // แนวทแยง
        ];

        for (let pattern of winPatterns) {
            const [a, b, c] = pattern;
            if (board[a] && board[a] === board[b] && board[a] === board[c]) {
                return board[a];
            }
        }
        return board.includes('') ? null : 'draw';
    };

    // ฟังก์ชันให้บอทเล่น
    const botMove = (newBoard) => {
        let emptyIndexes = newBoard.map((val, idx) => (val === '' ? idx : null)).filter(val => val !== null);
        let randomIndex = emptyIndexes[Math.floor(Math.random() * emptyIndexes.length)];
        newBoard[randomIndex] = 'O'; // ให้บอทเป็น 'O'
        setBoard(newBoard);
        setPlayerTurn(true);
    };

    // ฟังก์ชันเมื่อผู้ใช้คลิก
    const handleClick = (index) => {
        if (board[index] === '' && !winner) {
            let newBoard = [...board];
            newBoard[index] = 'X'; // ให้ผู้เล่นเป็น 'X'
            setBoard(newBoard);
            setPlayerTurn(false);
        }
    };

    // ตรวจสอบว่ามีการชนะหรือยังหลังจากทุกครั้งที่มีการเล่น
    useEffect(() => {
        const result = checkWinner(board);
        if (result) {
            setWinner(result);
            setRandomNumber(Math.floor(Math.random() * 2) + 1); // สุ่มตัวเลขเมื่อมีผู้ชนะ
        } else if (!playerTurn && !winner) {
            // บอทเล่นเมื่อถึงตาของบอท
            setTimeout(() => botMove([...board]), 500);
        }
    }, [board, playerTurn]);

    // แสดงข้อความเมื่อมีผู้ชนะ
    const renderResult = () => {
        if (winner === 'X') {
            return randomNumber === 1 ? <div>เก่งอยู่ตั้วนิ!</div> : <div>ได้การ!</div>;
        } else if (winner === 'O') {
            return randomNumber === 1 ? <div>กากแท้!</div> : <div>ส่ำนี้กะแพ้น้อ!</div>;
        } else if (winner === 'draw') {
            return <div>เสมอกัน!</div>;
        }
        return null;
    };

    const correctAnswer = '1233';
    const [userGuess, setUserGuess] = useState('');
    const [result, setResult] = useState('');

    // ฟังก์ชันสำหรับเช็คคำตอบ
    const handleSubmit = (e) => {
        e.preventDefault();

        if(isNaN(userGuess)|| userGuess === ''){
            setResult('ใส่คำตอบด้วยสิ เขาไม่ใส่ใจนะ')
        }else if (userGuess.toString() === correctAnswer) {
            setResult('เก่งๆ');
        } else {
            setResult('กระจอก');
        }
    };

    // ใช้ useEffect เพื่อให้ result หายไปหลังจาก 5 วินาที
    useEffect(() => {
        if (result) {
            const timer = setTimeout(() => {
                setResult(''); // รีเซ็ตผลลัพธ์หลังจาก 5 วินาที
            }, 5000);

            // เคลียร์ timer เมื่อ component ถูก unmounted หรือ result เปลี่ยนค่า
            return () => clearTimeout(timer);
        }
    }, [result]);

    return (
        <div>
            <div className="game-xo">
                <div className='title'>Tic-Tac-Toe</div>
                <div style={styles.board} className='board'>
                    {board.map((cell, idx) => (
                        <div
                            className='box-xo'
                            key={idx}
                            style={styles.cell}
                            onClick={() => handleClick(idx)}>
                            {cell}
                        </div>
                    ))}
                </div>
                <div className="result">
                    {renderResult()}
                </div>
                <button
                    className='btn-xo'
                    onClick={() => {
                        setBoard(initialBoard);
                        setWinner(null);
                        setPlayerTurn(true);
                        setRandomNumber(null); // รีเซ็ตตัวเลขสุ่ม
                    }}>
                    Restart
                </button>
            </div>

            <div className="game-guessWord">

                <div
                    className='container-guess'
                    style={{ textAlign: 'center'}}>
                    <div className='text-center font-bold text-xl mb-5'>
                        Guess The Word
                    </div>
                    <div className="hind-guess">
                        อะไรมาก่อน 1 2 3 4
                    </div>
                    {/* แสดงผลลัพธ์ตรงนี้ */}
                    

                    {/* ฟอร์มทายคำ */}
                    <form onSubmit={handleSubmit}
                            className='from-guess'>
                        <input
                            className='input-guess'
                            type="text"
                            value={userGuess}
                            onChange={(e) => setUserGuess(e.target.value)}
                            placeholder="ใส่คำทายของคุณ"
                        />
                        <div className="result-guess">
                        <p>{result}</p>
                    </div>
                        <br />
                        <button
                            type="submit"
                            className='btn-guess'
                        >Submit</button>
                    </form>
                </div>
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />

        </div>
    );
}

export default ServicesPage;

const styles = {
    board: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 100px)',
        gridGap: '5px',
    },
    cell: {
        width: '100px',
        height: '100px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '2rem',
        border: '1px solid black',
        cursor: 'pointer',
    },
};
