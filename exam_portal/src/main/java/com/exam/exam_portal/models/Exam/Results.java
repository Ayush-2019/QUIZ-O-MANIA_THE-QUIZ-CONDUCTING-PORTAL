package com.exam.exam_portal.models.Exam;

import javax.persistence.*;
import java.util.Date;

@Entity
public class Results {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long resid;

    private Long quizid;

    private Long userid;

    private Long marks;

    private Long attempted;

    @Basic(optional = false)
    @Column(name="submit_date", columnDefinition="TIMESTAMP DEFAULT CURRENT_TIMESTAMP", insertable = false, updatable = false)
    @Temporal(TemporalType.TIMESTAMP)
    private Date submitDate;

    public Results() {
    }

    public Results(Long resid, Long quizid, Long userid, Long marks, Long attempted) {
        this.resid = resid;
        this.quizid = quizid;
        this.userid = userid;
        this.marks = marks;
        this.attempted = attempted;
    }

    public Long getResid() {
        return resid;
    }

    public void setResid(Long resid) {
        this.resid = resid;
    }

    public Long getQuizid() {
        return quizid;
    }

    public void setQuizid(Long quizid) {
        this.quizid = quizid;
    }

    public Long getUserid() {
        return userid;
    }

    public void setUserid(Long userid) {
        this.userid = userid;
    }

    public Long getMarks() {
        return marks;
    }

    public void setMarks(Long marks) {
        this.marks = marks;
    }

    public Long getAttempted() {
        return attempted;
    }

    public void setAttempted(Long attempted) {
        this.attempted = attempted;
    }

    public Date getSubmitDate() {
        return submitDate;
    }

    public void setSubmitDate(Date submitDate) {
        this.submitDate = submitDate;
    }
}
