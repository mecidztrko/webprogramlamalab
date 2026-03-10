import Button from '../components/Button'
import Input from '../components/Input'
import Card from '../components/Card'
import Alert from '../components/Alert'
import { useState } from 'react'

export default function UIKit() {
  const [showAlert, setShowAlert] = useState(true)

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 p-8 space-y-12">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
        UI Kit
      </h1>
      <p className="text-gray-500 dark:text-gray-400">
        Tüm component varyantlarının sergilendiği sayfa.
      </p>

      {/* --- BUTTONS --- */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700 pb-2">
          Buttons
        </h2>

        {/* Varyant 1-4: Renk varyantları */}
        <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">
          Renk Varyantları
        </h3>
        <div className="flex flex-wrap gap-3">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="danger">Danger</Button>
          <Button variant="ghost">Ghost</Button>
        </div>

        {/* Boyut varyantları */}
        <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide mt-4">
          Boyut Varyantları
        </h3>
        <div className="flex flex-wrap items-end gap-3">
          <Button size="sm">Small</Button>
          <Button size="md">Medium</Button>
          <Button size="lg">Large</Button>
        </div>

        {/* Disabled durumu */}
        <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide mt-4">
          Disabled Durumu
        </h3>
        <div className="flex flex-wrap gap-3">
          <Button variant="primary" disabled>
            Disabled Primary
          </Button>
          <Button variant="danger" disabled>
            Disabled Danger
          </Button>
        </div>
      </section>

      {/* --- INPUTS --- */}
      <section className="space-y-4 max-w-md">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700 pb-2">
          Inputs
        </h2>

        {/* Varyant 5: Normal Input */}
        <Input
          id="ui-name"
          label="Normal Input"
          placeholder="Bir şey yazın..."
        />

        {/* Varyant 6: Hatalı Input */}
        <Input
          id="ui-err"
          label="Hatalı Input"
          error="Bu alan zorunludur"
        />

        {/* Varyant 7: Help Text Input */}
        <Input
          id="ui-help"
          label="Help Text Input"
          type="email"
          helpText="E-posta adresinizi girin"
        />

        {/* Varyant 8: Disabled Input */}
        <Input
          id="ui-dis"
          label="Disabled Input"
          disabled
          value="Düzenlenemez"
        />
      </section>

      {/* --- CARDS --- */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700 pb-2">
          Cards
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Elevated Card */}
          <Card variant="elevated" title="Elevated Card">
            <p>Gölge ile yükseltilmiş kart.</p>
          </Card>

          {/* Outlined Card */}
          <Card variant="outlined" title="Outlined Card">
            <p>Çerçeveli kart.</p>
          </Card>

          {/* Filled Card */}
          <Card
            variant="filled"
            title="Filled Card"
            footer={<Button size="sm">Detay</Button>}
          >
            <p>Dolgulu arka planlı kart.</p>
          </Card>
        </div>
      </section>

      {/* --- ALERTS --- */}
      <section className="space-y-4 max-w-xl">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700 pb-2">
          Alerts
        </h2>

        <Alert variant="info" title="Bilgi">
          Bilgilendirme mesajı.
        </Alert>

        <Alert variant="success" title="Başarılı">
          İşlem tamamlandı.
        </Alert>

        <Alert variant="warning" title="Uyarı">
          Dikkat edilmesi gereken durum.
        </Alert>

        {showAlert && (
          <Alert
            variant="error"
            title="Hata"
            dismissible
            onDismiss={() => setShowAlert(false)}
          >
            Bir hata oluştu. Bu alert kapatılabilir.
          </Alert>
        )}
      </section>
    </div>
  )
}
