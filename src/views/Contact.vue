<script setup lang="ts">
import { ref } from 'vue';

const form = ref({
  name: '',
  phone: '',
  company: '',
  needs: ''
});

const submitForm = () => {
  alert('感谢您的留言，我们会尽快与您联系！');
  form.value = { name: '', phone: '', company: '', needs: '' };
};
</script>

<template>
  <div class="page-wrapper">
    <div class="page-banner">
      <h1>联系我们</h1>
    </div>
    
    <div class="container" style="padding: 80px 0;">
      <div class="grid grid-cols-2 gap-12">
        <div class="contact-info">
          <h2>随时欢迎您的垂询</h2>
          <p class="section-subtitle" style="text-align: left; margin-bottom: 40px; color: var(--text-secondary);">
            无论是寻求业务合作、媒体采访，还是想了解拾光的智慧养老解决方案，我们都非常期待与您交流。
          </p>
          
          <div class="info-list">
            <div class="info-item">
              <div class="info-icon">📞</div>
              <div>
                <h4>服务热线</h4>
                <p>010-63637350</p>
                <span class="info-desc">工作日 9:00 - 18:00</span>
              </div>
            </div>
            
            <div class="info-item">
              <div class="info-icon">📧</div>
              <div>
                <h4>官方邮箱</h4>
                <p>wangtianyu@zyhldt.com</p>
                <span class="info-desc">我们将在1-2个工作日内回复</span>
              </div>
            </div>
            
            <div class="info-item">
              <div class="info-icon">📍</div>
              <div>
                <h4>总部地址</h4>
                <p>北京市朝阳区</p>
                <span class="info-desc">欢迎莅临考察指导</span>
              </div>
            </div>
          </div>
        </div>
        
        <div class="contact-form-wrap">
          <div class="contact-form">
            <h3>在线留言</h3>
            <p>留下您的需求，专业顾问将为您提供专属方案</p>
            <form @submit.prevent="submitForm">
              <div class="form-group">
                <label>您的称呼</label>
                <input type="text" v-model="form.name" placeholder="请输入您的姓名" required />
              </div>
              <div class="form-group">
                <label>联系电话</label>
                <input type="tel" v-model="form.phone" placeholder="请输入您的手机号" required />
              </div>
              <div class="form-group">
                <label>所属机构/公司</label>
                <input type="text" v-model="form.company" placeholder="选填" />
              </div>
              <div class="form-group">
                <label>需求描述</label>
                <textarea v-model="form.needs" placeholder="简单描述您的合作意向或需求" rows="4" required></textarea>
              </div>
              <button type="submit" class="btn btn-primary" style="width: 100%; margin-top: 10px;">提交留言</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.page-banner {
  height: 350px;
  background: linear-gradient(rgba(30, 58, 95, 0.8), rgba(30, 58, 95, 0.8)), url('/images/photo-1497366216548-37526070297c_170af1e5d5.jpg') center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  padding-top: var(--nav-height);
}

.page-banner h1 {
  font-size: 42px;
  font-weight: 700;
  text-shadow: 0 2px 4px rgba(0,0,0,0.3);
  color: white;
}

.contact-info h2 {
  text-align: left;
  font-size: 36px;
  color: var(--blue-dark);
  margin-bottom: 15px;
}
.info-list {
  display: flex;
  flex-direction: column;
  gap: 30px;
}
.info-item {
  display: flex;
  align-items: flex-start;
  gap: 20px;
}
.info-icon {
  width: 50px;
  height: 50px;
  background: rgba(243, 123, 29, 0.1);
  color: var(--primary-color);
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  flex-shrink: 0;
}
.info-item h4 {
  font-size: 18px;
  color: var(--blue-dark);
  margin-bottom: 5px;
}
.info-item p {
  font-size: 18px;
  font-weight: 500;
  color: var(--text-main);
  margin-bottom: 3px;
}
.info-desc {
  font-size: 13px;
  color: var(--text-secondary);
}

.contact-form-wrap {
  padding-left: 40px;
}
.contact-form {
  background: white;
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 20px 50px rgba(0,0,0,0.08);
  border-top: 4px solid var(--primary-color);
}
.contact-form h3 {
  font-size: 24px;
  color: var(--blue-dark);
  margin-bottom: 10px;
}
.contact-form p {
  font-size: 14px;
  color: var(--text-secondary);
  margin-bottom: 30px;
}

.form-group {
  margin-bottom: 20px;
}
.form-group label {
  display: block;
  font-size: 14px;
  font-weight: 500;
  color: var(--text-main);
  margin-bottom: 8px;
}
.form-group input,
.form-group textarea {
  width: 100%;
  padding: 12px 15px;
  border: 1px solid var(--border-color);
  border-radius: 6px;
  font-family: inherit;
  font-size: 15px;
  transition: all 0.3s;
  background: #fcfcfc;
}
.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--primary-color);
  background: white;
  box-shadow: 0 0 0 3px rgba(243, 123, 29, 0.1);
}
</style>
