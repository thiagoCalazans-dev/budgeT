import axios from 'axios'


const apikey = process.env.API_KEY

const api = axios.create({
    baseURL: 'https://mvaimckvpidhijeamqzj.supabase.co/rest/v1/',
    headers: {
        apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im12YWltY2t2cGlkaGlqZWFtcXpqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTk1NDUzODIsImV4cCI6MTk3NTEyMTM4Mn0.mp7VNpDT7HbYmanalLPl5ZZiLB366GtVui43YlqDpQo"
    }
})

export default api;