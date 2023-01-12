import React from "react";
import styles from '../../assets/styles/header.module.css';

export default function Header(){
    return (
        <header className={styles.header}>
      
            <div className={styles.headerText}>
                <div className='container'>
                
                <h3>মহান আল্লাহ তায়ালা বলেনঃ</h3>
                <p>.يخرج من بطونها شراب مختلف الوانه شفاء للناس
                অর্থাৎ তার পেট থেকে বিভিন্ন রঙের পানীয় বের হয়। এতে মানুষের জন্যে রোগের প্রতিষেধক রয়েছে , সূরা আন নহল ,,فيه شفاء للناس ،মধু যেমন বলকারক খাদ্য এবং রসনার জন্যে আনন্দ ও তৃপ্তিদায়ক, তেমনি রোগ-ব্যাধির জন্যে ও ফলদায়ক ব্যবস্থাপত্র কেন হবে না, স্রাষ্টার ভ্রাম্যমান মেশিন সর্বপ্রকার ফল-ফুল থেকে বলকারক রস ও পবিত্র নির্যাস বের করে সুরক্ষিত গৃহে সঞ্চিত রাখে
                </p>
                <a href="" className="my-btn mb-5">ক্রয় করুন</a>
                </div>
            </div>
    
        </header>
    )
}